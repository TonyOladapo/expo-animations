import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Spring = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const animatedStyles = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 2,
      useNativeDriver: true,
      friction: 9,
      tension: 160,
    }).start(() => {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        friction: 9,
        tension: 160,
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

export default Spring;
