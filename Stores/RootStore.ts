import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UserModel } from "./Models/UserModel";
import { SongModel } from "./Models/SongModel";
import { fetchLyricsForSong, fetchTopSongs } from "../Utils/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RootStoreModel = types
  .model("RootStore")
  .props({
    users: types.optional(types.map(UserModel), {}),
    currentUser: types.maybeNull(types.reference(UserModel)),
    songs: types.optional(types.map(SongModel), {}),
  })
  .actions((self) => ({
    setCurrentUser(email: string) {
      const connectedUser = self.users.get(email);
      if (connectedUser) {
        self.currentUser = connectedUser;
      }
    },
    logout() {
      self.currentUser = null;
    },
    addUser(user: {
      email: string;
      password: string;
      name: string;
      score: number;
    }) {
      const newUser = UserModel.create(user);
      self.users.set(newUser.email, newUser);
    },
    updateScore(score: number) {
      const connectedUser = self.users.get(self.currentUser?.email as string);
      connectedUser?.updateScore(score);
    },
    addSong(Song: SongModel) {
      self.songs.set(Song.track_id, Song);
    },
    getRandomSongs() {
      const songsArray = Array.from(self.songs.values());
      const randomIndices = new Set();

      while (randomIndices.size < Math.min(3, songsArray.length)) {
        const randomIndex = Math.floor(Math.random() * songsArray.length);
        randomIndices.add(randomIndex);
      }
      return [...randomIndices].map((index: any) => songsArray[index]);
    },
  }))
  .actions((self) => ({ 
    fetchAndAddSongs() {
      fetchTopSongs()
        .then((response) => {
          const songs = response.message.body.track_list;
          console.log(response )
          songs.forEach((song: any) => {
            const trackId = song.track.track_id;
            fetchLyricsForSong(trackId)
              .then((trackLyrics: any) => {
                const lyricsArray = trackLyrics
                  .split("\n")
                  .slice(0, -3)
                  .filter((line: string) => line !== "" && line !=="...");
                self.addSong(
                  SongModel.create({
                    track_id: trackId.toString(),
                    track_name: song.track.track_name,
                    artist_name: song.track.artist_name,
                    lyrics: lyricsArray,
                  })
                );
              })
              .catch((error) => {
                console.error("Error fetching lyrics for song:", error);
              });
          });
        })
        .catch((error) => {
          console.error("Error fetching top songs:", error);
        });
    }
   }))
  .actions((self) => ({
    afterCreate() {

      AsyncStorage.getItem("root").then((root: any) => {
        if (root) { 
          const parsedSongs = Object.values(JSON.parse(root).songs) as SongModel[];
  
          if (parsedSongs && parsedSongs.length > 0) {
            parsedSongs.forEach((song: SongModel) => {
              self.addSong(song);
            });
          } else {
            self.fetchAndAddSongs();
          }
        } else {
          self.fetchAndAddSongs();
        }
      }).catch((error) => {
        console.error("Error reading from AsyncStorage:", error);
      });
    },
  }))


export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
