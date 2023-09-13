import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useStores } from "../../Stores/useStores";
import { SongModel } from "../../Stores/Models/SongModel";
import Timer from "../../Components/Timer";
import ArtistCard from "../../Components/ArtistCard";

const GameScreen: React.FC = () => {
  const store = useStores();
  const [randomSongs, setRandomSongs] = useState<SongModel[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<SongModel | null>(null);
  const [randomLyric, setRandomLyric] = useState<string | null>(null);
  const [resetValue, setResetValue] = useState<boolean>(false);

  const loadNewQuestion = () => {
    const songs = store.getRandomSongs();
    setRandomSongs(songs);

    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    setCorrectAnswer(selectedSong);

    const lyricIndex = Math.floor(Math.random() * selectedSong.lyrics.length);
    setRandomLyric(selectedSong.lyrics[lyricIndex]);
  };

  useEffect(() => {
    loadNewQuestion();
  }, []);

  return (
    <ScreenTemplate>
      <View style={styles.header}>
        <Text style={styles.headerText}>Guess the Singer!</Text>

        <Timer
          initialTime={10}
          resetKey={resetValue}
          onTimeOut={() => {
            loadNewQuestion();
            setResetValue(!resetValue);
          }}
        />
      </View>

      <View style={styles.lyricsBox}>
        <Text style={styles.lyricsText}>{randomLyric}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" ,marginTop:20}}>
        {randomSongs.map((song, index) => (
          <ArtistCard
            key={index}
            artistName={song.artist_name}
            onPress={() => {
              if (song === correctAnswer) {
                console.log("Correct!");
              } else {
                console.log("Wrong!");
                loadNewQuestion();
              }
            }}
          />
        ))}
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal:20,
  },
  lyricsBox: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderRadius: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width:"80%",
    elevation: 5,
  },
  lyricsText: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
  },
  artistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default GameScreen;
