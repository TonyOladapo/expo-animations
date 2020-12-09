import React, { useState } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

const Decay = () => {
  const [animation, setAnimation] = useState(new Animated.ValueXY(0));

  let _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      animation.extractOffset();
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: animation.x,
          dy: animation.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: (e, { vx, vy }) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
        useNativeDriver: true,
      }).start();
    },
  });

  const animatedStyles = {
    transform: animation.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, animatedStyles]}
        {..._panResponder.panHandlers}
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
    height: 150,
    width: 150,
    backgroundColor: "tomato",
    borderRadius: 10,
  },
});

export default Decay;
