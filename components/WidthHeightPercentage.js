import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const WidthHeightPercentage = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "50%"],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "30%"],
  });

  const animatedStyles = {
    width: 150,
    height: heightInterpolate,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 350,
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
    // height: 150,
    // width: 150,
    borderRadius: 10,
  },
});

export default WidthHeightPercentage;
