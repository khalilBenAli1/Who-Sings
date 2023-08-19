import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log("signup")
  };

  return (
    <View style={tw`flex-1 justify-center p-5`}>
      <Text style={tw`text-2xl mb-4`}>Signup</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={tw`p-2 border rounded mb-4`}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={tw`p-2 border rounded mb-4`}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
        style={tw`p-2 border rounded mb-4`}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
