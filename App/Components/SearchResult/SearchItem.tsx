import styles from "./SearchItemStyle";
import React, { Component } from "react";
import _ from "lodash";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import Images from "@root/App/Themes/Images";
import Svg, { Ellipse } from "react-native-svg";

interface Props {
  isSelected : boolean, isFirstNode : boolean
}

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect}>
          <View style={styles.leftbox}>
            <Image
              source={Images.DoctorIcon}
              style={styles.image}
            />
            <Text style={styles.text}>Dallas, TX</Text>
            <Text style={styles.milesText}>miles</Text>
            <Text style={styles.milesValue}>3.4</Text>
            <Svg style={styles.circleCounter} viewBox="0 0 100 100">
              <Ellipse rx={50} ry={50} cx={50} cy={50} fill="#dddddd" />
            </Svg>
            <Text style={styles.txtCounter}>123</Text>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.txtDoctorname}>Dcotor Name</Text>
            <Text style={styles.txtFamilyMedicine}>Family Medicine</Text>
            <Text style={styles.labelGender}>Gender : </Text>
            <Text style={styles.labelAge}>Age : </Text>
            <Text style={styles.txtGenderValue}>M</Text>
            <Text style={styles.ageValue}>32</Text>
            <Text style={styles.txtStatus}>Accepting new patients</Text>
          </View>
        </View>
      </View>


    );
  }
}

