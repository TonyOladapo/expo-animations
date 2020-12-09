import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Rotation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });
  const animatedStyles = {
    transform: [
      {
        rotate: rotateInterpolate,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start();
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

export default Rotation;
