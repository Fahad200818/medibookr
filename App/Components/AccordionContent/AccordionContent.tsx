import React, { Component } from "react";
import styles from "./AccordionContentStyle";
import {Icon} from "native-base";
import { View, StyleSheet, Text, Image } from "react-native";

interface Props {
  isSelected : boolean, isFirstNode : boolean
}

export default class Untitled extends Component {
  render() {
    return (
    <View style={styles.root}>
      <View style={styles.rect2} />
      <Text style={styles.text}>Cardio-pulminary</Text>
      <Text style={styles.text2}>
        This is a description of the specialty in question. It can be several
        lines of text long and can help the user gather a better
        understanding…
      </Text>
      <View style={styles.rect3} />
      <View style={styles.rect4} />

      {/*{<Image
        source={require("../Images/ic_accordion_content.png")} // Please put the path of image
        style={styles.image}
      />}*/}
    </View>

    );
  }
}

