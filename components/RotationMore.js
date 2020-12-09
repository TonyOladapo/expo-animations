import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const RotationMore = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "360deg"],
  });

  const animatedStyles = {
    transform: [
      {
        rotateX: xInterpolate,
      },

      {
        rotateY: yInterpolate,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
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

export default RotationMore;
