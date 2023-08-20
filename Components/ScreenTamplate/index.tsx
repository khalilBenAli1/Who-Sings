import React from "react";
import { View, Image, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

interface ScreenTemplateProps {
  children: React.ReactNode;
  backgroundColor?: string; 
  topImage?: any;
  topText: string;
}

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  backgroundColor="#F1FAEE" ,
  topImage,
  topText,
}) => {
  return (
    <View style={[tw`flex-1`,{backgroundColor:backgroundColor}]}> 
      <View style={tw`flex-1 justify-center p-5`}>
        <Image
          source={topImage}
          style={tw`self-center mb-4`}
          resizeMode="contain"
        />
        <Text style={tw`text-xl text-center mb-4`}>{topText}</Text>
        {children}
      </View>
    </View>
  );
};

export default ScreenTemplate;
