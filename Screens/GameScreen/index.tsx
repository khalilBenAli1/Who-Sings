import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useStores } from "../../Stores/useStores";
import { SongModel } from "../../Stores/Models/SongModel";
import Timer from "../../Components/Timer";
import ArtistCard from "../../Components/ArtistCard";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import * as Animatable from "react-native-animatable";

const GameScreen: React.FC = () => {
  const store = useStores();
  const navigation = useNavigation();
  const [randomSongs, setRandomSongs] = useState<SongModel[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<SongModel | null>(null);
  const [randomLyric, setRandomLyric] = useState<string | null>(null);
  const [resetValue, setResetValue] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [numberOfSongs, setNumberOfSongs] = useState<number>(0);
  const contentRef = useRef<any>(null);

  const loadNewQuestion = () => {
    contentRef.current?.fadeOut(500).then(() => {
      const songs = store.getRandomSongs();
      setRandomSongs(songs);
      const randomIndex = Math.floor(Math.random() * songs.length);
      const selectedSong = songs[randomIndex];
      setCorrectAnswer(selectedSong);
      const lyricIndex = Math.floor(Math.random() * selectedSong.lyrics.length);
      setRandomLyric(selectedSong.lyrics[lyricIndex]);
      setNumberOfSongs(numberOfSongs + 1);
      contentRef.current?.fadeIn(500);
    });
  };

  const playSound = async (soundFile: string) => {
    const { sound } = await Audio.Sound.createAsync(
      require(`../../assets/sounds/${soundFile}`),
    );
    await sound.playAsync();
  };

  const handleAnswerClick = (song: SongModel) => {
    if (numberOfSongs === 10) {
      store.updateScore(score);
      navigation.navigate("Main" as never);
    }
    if (song === correctAnswer) {
      setScore(score + 1);
      playSound("right_answer.wav");
      loadNewQuestion();
      setResetValue(!resetValue);
      console.log("Correct!");
    } else {
      console.log("Wrong!");
      playSound("wrong_answer.mp3");
      loadNewQuestion();
      setResetValue(!resetValue);
    }
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
            playSound("wrong_answer.mp3");
            loadNewQuestion();
            setResetValue(!resetValue);
          }}
        />
      </View>
      <Animatable.View
        ref={contentRef}
        animation="fadeIn"
        duration={500}
        style={{ alignItems: "center" }}
      >
        <View style={styles.lyricsBox}>
          <Text style={styles.lyricsText}>{randomLyric}</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          {randomSongs.map((song, index) => (
            <ArtistCard
              key={index}
              artistName={song.artist_name}
              onPress={() => handleAnswerClick(song)}
            />
          ))}
        </View>
      </Animatable.View>
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
    paddingHorizontal: 20,
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
    width: "80%",
    elevation: 5,
  },
  lyricsText: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  artistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default GameScreen;
