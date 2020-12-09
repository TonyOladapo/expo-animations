import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Scale = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const animatedStyles = {
    transform: [
      {
        scale: animation,
      },
    ],

    backgroundColor: "green",
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 350,
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    borderRadius: 10,
  },
});

export default Scale;
