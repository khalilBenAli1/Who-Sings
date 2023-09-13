import React from "react";
import AppButton from "../../Components/AppButton";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useStores } from "../../Stores/useStores";
import { useNavigation } from "@react-navigation/native";

const MainScreen: React.FC = () => {
  const rootStore = useStores();
  const navigation = useNavigation();

  const handleNewGame = () => {
    navigation.navigate("GameScreen" as never);
  };

  const handleMyProfil = () => {
    navigation.navigate("Profil" as never);
  };

  const handleHighScore = () => {
    navigation.navigate("highScore" as never);
  };

  const Logout = () => {
    rootStore.logout();
    navigation.navigate("Login" as never);
  };

  return (
    <ScreenTemplate>
      <AppButton label="New Game" onPress={handleNewGame} />
      <AppButton label="My Profile" onPress={handleMyProfil} />
      <AppButton label="High Score" onPress={handleHighScore} />
      <AppButton label="Logout" onPress={Logout} />
    </ScreenTemplate>
  );
};

export default MainScreen;
