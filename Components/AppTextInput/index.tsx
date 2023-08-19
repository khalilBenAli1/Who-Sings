import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface AppTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ value, onChangeText, ...props }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={tw`p-2 border rounded mb-4`}
      {...props}
    />
  );
};

export default AppTextInput;
