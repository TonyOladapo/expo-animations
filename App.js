import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AbsolutePosition from "./components/AbsolutePosition";
import Add from "./components/Add";
import Colors from "./components/Colors";
import Decay from "./components/Decay";
import Delay from "./components/Delay";
import Divide from "./components/Divide";
import Easing from "./components/Easing";
import Event from "./components/Event";
import Modulo from "./components/Modulo";
import Multiply from "./components/Multiply";
import InterpolatesOnInterpolate from "./components/InterpolatesOnInterpolate";
import Opacity from "./components/Opacity";
import Parallel from "./components/Parallel";
import Rotation from "./components/Rotation";
import Scale from "./components/Scale";
import Sequence from "./components/Sequence";
import Spring from "./components/Spring";
import Stagger from "./components/Stagger";
import TranslatePosition from "./components/TranslatePosition";
import WidthHeight from "./components/WidthHeight";
import WidthHeightPercentage from "./components/WidthHeightPercentage";
import ColorsBackground from "./components/ColorsBackground";
import RotationMore from "./components/RotationMore";
import Extrapolate from "./components/Extrapolate";
import CreateAnimatedComponent from "./components/CreateAnimatedComponent";
import SetNativeProps from "./components/SetNativeProps";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Opacity /> */}
      {/* <TranslatePosition /> */}
      {/* <Scale /> */}
      {/* <WidthHeight /> */}
      {/* <AbsolutePosition /> */}
      {/* <Colors /> */}
      {/* <Rotation /> */}
      {/* <WidthHeightPercentage /> */}
      {/* <Easing /> */}
      {/* <Spring /> */}
      {/* <Event /> */}
      {/* <Decay /> */}
      {/* <Add /> */}
      {/* <Divide /> */}
      {/* <Multiply /> */}
      {/* <Modulo /> */}
      {/* <Parallel /> */}
      {/* <Sequence /> */}
      {/* <Stagger /> */}
      {/* <Delay /> */}
      {/* <InterpolatesOnInterpolate /> */}
      {/* <ColorsBackground /> */}
      {/* <RotationMore /> */}
      {/* <Extrapolate /> */}
      {/* <CreateAnimatedComponent /> */}
      <SetNativeProps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
