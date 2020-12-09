import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InterpolatesOnInterpolate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const animatedInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });

  const interpolatedInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });

  const translateXInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
    outputRange: [0, -30, -50, 80, -100, 300, 0, -100],
  });

  const animatedStyles = {
    transform: [
      {
        translateY: animatedInterpolate,
      },
      {
        translateX: translateXInterpolate,
      },
    ],

    opacity: interpolatedInterpolate,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    backgroundColor: "tomato",
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});

export default InterpolatesOnInterpolate;
