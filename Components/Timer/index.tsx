import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface TimerProps {
  initialTime: number;
  onTimeOut: () => void;
}

const TimerComponent: React.FC<TimerProps> = ({ initialTime, onTimeOut }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <View style={tw`p-4 rounded bg-opacity-10 bg-white items-center justify-center`}>
      <Text style={tw`text-2xl font-bold text-white mb-2`}>{timeLeft} seconds left</Text>
    </View>
  );
};

export default TimerComponent;
