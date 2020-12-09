import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Modulo = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const newAnimation = Animated.modulo(animation, 3);

  const interpolated = newAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "270deg"],
  });

  const animatedStyles = {
    transform: [
      {
        rotate: interpolated,
      },
    ],
  };

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 12,
        duration: 3500,
        useNativeDriver: true,
      }),
    ]).start();
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

export default Modulo;
