import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Colors = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(238, 238, 238)", "rgb(255, 99, 71)"],
  });

  const textInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 99, 71)", "rgb(238, 238, 238)"],
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const textAnimatedStyle = {
    color: textInterpolation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
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
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={textAnimatedStyle}>Hello</Animated.Text>
        </Animated.View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Colors;
