import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Colors = () => {
  const [animation, setAnimation] = useState(new Animated.ValueXY());
  const [state, setState] = useState({
    width: 0,
    height: 0,
  });

  const animatedStyles = {
    transform: animation.getTranslateTransform(),
  };

  const startAnimation = () => {
    const { width, height } = Dimensions.get("window");
  };

  const saveDimensions = (e) => {
    setState({
      ...state,
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={startAnimation}
        onLayout={saveDimensions}
      >
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    backgroundColor: "tomato",
    height: 150,
    width: 150,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default Colors;
