import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface TimerProps {
  initialTime: number;
  onTimeOut: () => void;
  resetKey: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeOut, resetKey }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animatedValue.setValue(1);
    setTimeLeft(initialTime);
  }, [resetKey]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeOut();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeOut]);

  const circleCircumference = 2 * Math.PI * 30;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: initialTime * 1000,
      useNativeDriver: true,
    }).start();
  }, [resetKey, initialTime, animatedValue]);

  return (
    <View style={styles.container}>
      <Svg width="80" height="80" viewBox="0 0 80 80">
        <Circle cx="40" cy="40" r="30" fill="none" />
        <AnimatedCircle
          cx="40"
          cy="40"
          r="30"
          strokeWidth="5"
          stroke="#faa98c"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circleCircumference}
          strokeDashoffset={animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [circleCircumference, 0],
          })}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.timerText}>{timeLeft} s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#faa98c",
  },
});

export default Timer;
