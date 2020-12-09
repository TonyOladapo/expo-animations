import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Delay = () => {
  const [colorAnimation, setColorAnimation] = useState(new Animated.Value(0));
  const [scaleAnimation, setScaleAnimation] = useState(new Animated.Value(1));

  const backgroundColorInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"],
  });

  const boxStyle = {
    backgroundColor: backgroundColorInterpolate,
    transform: [
      {
        scale: scaleAnimation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }),

      Animated.delay(1500),

      Animated.parallel([
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxStyle]} />
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

export default Delay;
