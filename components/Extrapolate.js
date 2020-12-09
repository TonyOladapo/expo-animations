import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Extrapolate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const scaleInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
    extrapolate: "clamp",
    // extrapolate: "identity",
    // extrapolateLeft: "clamp",
  });

  const animatedStyles = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
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

export default Extrapolate;
