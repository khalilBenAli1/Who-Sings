import React from 'react';

import AppButton from '../../Components/AppButton';
import ScreenTemplate from '../../Components/ScreenTamplate'; // Adjust the path accordingly

const MainScreen: React.FC = () => {
  
  const handleNewGame = () => {
    
  };

  const handleMyProfil = () => {
    
  };

  const handleHighScore = () => {
  
  };

  const Logout = () => {
  
  };

  return (
    <ScreenTemplate 
      topText="Who Sings"
      // backgroundImage={require('../../assets/background.jpg')}
      // topImage={require('../../assets/topImage.png')}
    >
      <AppButton label="New Game" onPress={handleNewGame}/>
      <AppButton label="My Profile" onPress={handleMyProfil}/>
      <AppButton label="High Score" onPress={handleHighScore}/>
      <AppButton label="Logout" onPress={Logout}/>
    </ScreenTemplate>
  );
}

export default MainScreen;
