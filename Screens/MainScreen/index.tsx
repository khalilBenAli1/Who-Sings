import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AppButton from '../../Components/AppButton';

const MainScreen: React.FC = () => {
  
  const handleNewGame = () => {
 
  };

  const handleMyScore = () => {
    
  };

  const handleHighScore = () => {
  
  };

  const Logout = () => {
  
  };

  return (
    <View style={tw`flex-1 justify-center p-5`}>
      <Text style={tw`text-2xl mb-8 text-center`}>Who Sings</Text>
      <AppButton label="New Game" onPress={handleNewGame}/>
      <AppButton label="My Score" onPress={handleMyScore}/>
      <AppButton label="High Score" onPress={handleHighScore}/>
      <AppButton label="Logout" onPress={Logout}/>
    </View>
  );
}

export default MainScreen;
