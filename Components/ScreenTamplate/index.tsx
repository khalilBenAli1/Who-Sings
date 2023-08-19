import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface ScreenTemplateProps {
  children: React.ReactNode;
  backgroundImage?: any;
  topImage?: any;
  topText: string;
}

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({ children, backgroundImage, topImage, topText }) => {
  return (
    <ImageBackground source={backgroundImage} style={tw`flex-1`}>
      <View style={tw`flex-1 justify-center p-5`}>
        <Image source={topImage} style={tw`self-center mb-4`} resizeMode="contain" />
        <Text style={tw`text-xl text-center mb-4`}>{topText}</Text>
        {children}
      </View>
    </ImageBackground>
  );
};

export default ScreenTemplate;
