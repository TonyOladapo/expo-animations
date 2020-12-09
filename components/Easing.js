import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Easing as Ease,
} from "react-native";

const Easing = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
      easing: Ease.back(5),
      //   easing: Ease.bounce,
      //   easing: Ease.elastic(3),
      //   easing: Ease.bezier(0.06, 1, 0.86, 0.23),
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
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

export default Easing;
