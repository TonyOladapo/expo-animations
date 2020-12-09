import React, { useState } from "react";
import { Animated, StyleSheet, View, Button } from "react-native";

const AnimatedButton = Animated.createAnimatedComponent(Button);

const CreateAnimatedComponent = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const animatedColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"],
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <AnimatedButton
        onPress={startAnimation}
        title="Button"
        color={animatedColor}
      />
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

export default CreateAnimatedComponent;
