import React from 'react';
import { Button, View, Text } from 'react-native';
import ScreenTemplate from '../../Components/ScreenTamplate';
import tw from 'tailwind-react-native-classnames';

const GameScreen = () => {
  return (
    <ScreenTemplate
      topText="Guess the Singer!"
    >
      {/* Lyrics Box */}
      <View style={tw`bg-white p-5 rounded-lg mb-5`}>
        <Text style={tw`text-center text-lg`}>Lyrics go here...</Text>
      </View>

      {/* Singer Options */}
      <View style={tw`flex-row justify-between`}>
        <Button title="Singer 1" onPress={() => {}} />
        <Button title="Singer 2" onPress={() => {}} />
        <Button title="Singer 3" onPress={() => {}} />
      </View>
    </ScreenTemplate>
  );
};

export default GameScreen;
