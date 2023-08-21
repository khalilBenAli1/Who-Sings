import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import ScreenTemplate from "../../Components/ScreenTamplate";
import tw from "tailwind-react-native-classnames";
import { useStores } from "../../Stores/useStores";
import { SongModel } from "../../Stores/Models/SongModel";
import Timer from "../../Components/Timer";

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
    <ScreenTemplate topText="Guess the Singer!">
      <Timer
        initialTime={10}
        resetKey={resetValue}
        onTimeOut={() => {
          loadNewQuestion();
          setResetValue(!resetValue);
        }}
      />

      <View style={tw`bg-white p-5 rounded-lg mb-5`}>
        <Text style={tw`text-center text-lg`}>{randomLyric}</Text>
      </View>

      <View style={tw`flex-row justify-between`}>
        {randomSongs.map((song, index) => (
          <Button
            key={index}
            title={song.artist_name}
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

export default GameScreen;
