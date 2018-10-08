import styles from "./FilterStyle";
import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import Images from "@root/App/Themes/Images";
import Svg, { Ellipse } from "react-native-svg";
import {Picker} from "native-base";

interface Props {
  isSelected : boolean, isFirstNode : boolean
}

export default class Filter extends Component {
  render() {
    return (
      <View style={styles.root}>

        <View style={styles.rect2}>
            <Image
              style={styles.image}
              source={Images.Nav}
              resizeMode="cover"
            />
            <Text style={styles.text}>Filters</Text>
            <Text style={styles.txtSortby}>Soft by</Text>
        </View>

        <View style={{height: 50}} >

          <Picker style={styles.itemPicker} enabled={true}>
            <Picker.Item value="one" label="Lorem Ipsum Dolor Sit" />
            <Picker.Item value="two" label="Lorem Ipsum Dolor Sit" />
            <Picker.Item value="three" label="Lorem Ipsum Dolor Sit" />
          </Picker>

        </View>


        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>


    );
  }
}

