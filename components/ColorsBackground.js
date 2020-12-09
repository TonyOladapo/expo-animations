import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ColorsBackground = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const boxInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)", "rgb(67, 99, 71)"],
  });

  const bgInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      "rgba(255, 99, 71, 0)",
      "rgba(99, 71, 255, 1)",
      "rgba(255, 255, 255, 0)",
    ],
  });

  const animatedStyles = {
    backgroundColor: boxInterpolate,
  };

  const bgStyle = {
    backgroundColor: bgInterpolate,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});

export default ColorsBackground;
