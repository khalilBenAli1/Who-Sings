import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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
      style={[styles.button, style]}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 15,
    margin: 8,
    backgroundColor: 'purple',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
});

export default AppButton;
