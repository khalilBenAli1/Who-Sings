import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: Object;
  textStyle?: Object;
}

const AppButton: React.FC<ButtonProps> = ({ label, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[tw`p-4 bg-blue-500 rounded mb-4 shadow-md`, style]}
      activeOpacity={0.7}
    >
      <Text style={[tw`text-white text-center font-semibold`, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
