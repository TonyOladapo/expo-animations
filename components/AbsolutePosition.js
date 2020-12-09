import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const AbsolutePosition = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 350,
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
    position: "absolute",
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    borderRadius: 10,
    padding: 16,
    top: 0,
    left: 0,
    right: 0,
  },
});

export default AbsolutePosition;
