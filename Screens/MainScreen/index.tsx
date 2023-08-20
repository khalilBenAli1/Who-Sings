import React, { useEffect } from 'react';
import AppButton from '../../Components/AppButton';
import ScreenTemplate from '../../Components/ScreenTamplate';
import { useStores } from '../../Stores/useStores';
import { useNavigation } from '@react-navigation/native';
import { fetchTopSongs } from '../../Utils/helpers';

const MainScreen: React.FC = () => {

  const rootStore=useStores()
  const navigation = useNavigation();
  
  const handleNewGame = () => {
    
  };

  const handleMyProfil = () => {
    
  };

  const handleHighScore = () => {
  
  };

  const Logout = () => {
    rootStore.logout()
    navigation.navigate("Login" as never)
  };

  return (
    <ScreenTemplate 
      topText="Who Sings"
    >
      <AppButton label="New Game" onPress={handleNewGame}/>
      <AppButton label="My Profile" onPress={handleMyProfil}/>
      <AppButton label="High Score" onPress={handleHighScore}/>
      <AppButton label="Logout" onPress={Logout}/>
    </ScreenTemplate>
  );
}

export default MainScreen;
