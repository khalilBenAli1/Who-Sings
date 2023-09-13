import React from "react";
import { FlatList } from "react-native";
import RankCard from "../../Components/RankCard";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useStores } from "../../Stores/useStores";
import AppButton from "../../Components/AppButton";
import { useNavigation } from "@react-navigation/native";

const HighScoreScreen: React.FC = () => {
  const navigation = useNavigation();
  const { users } = useStores();
  const userScores = Array.from(users.values());

  userScores.sort((a, b) => b.score - a.score);

  return (
    <ScreenTemplate>
      <FlatList
        data={userScores}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.email}
        renderItem={({ item, index }) => (
          <RankCard rank={index + 1} user={item} />
        )}
        style={{ maxHeight: "40%" }}
      />
      <AppButton
        label="return"
        onPress={()=>navigation.navigate("Main" as never)}
      />
    </ScreenTemplate>
  );
};

export default HighScoreScreen;
