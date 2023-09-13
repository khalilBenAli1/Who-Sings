import React from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";

interface AppTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  style?: Object;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  value,
  onChangeText,
  style,
  ...props
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        underlineColorAndroid="transparent"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "purple",
    padding: 16,
    margin: 8,
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "black",
    fontFamily: "Montserrat-Regular",
  },
});

export default AppTextInput;
