import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Event = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const backgroungInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"],
  });
  const animatedStyles = {
    backgroundColor: backgroungInterpolate,
  };

  const startAnimation = () => {};

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
      >
        <Animated.View style={[styles.content, animatedStyles]} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    height: 3000,
    backgroundColor: "red",
  },
});

export default Event;
