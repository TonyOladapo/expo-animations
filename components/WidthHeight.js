import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const WidthHeight = () => {
  const [animation, setAnimation] = useState(new Animated.Value(150));
  const animatedStyles = {
    width: animation,
    height: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>
            Long Text.Long Text.Long Text.Long Text.Long Text.Long Text.Long
            Text.Long Text.Long Text.Long Text.Long Text.Long Text.Long
            Text.Long Text.Long Text.Long Text.Long Text.Long Text.Long
          </Text>
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
    // width: 150,
    // height: 150,
    backgroundColor: "tomato",
    borderRadius: 10,
    padding: 16,
  },
});

export default WidthHeight;
