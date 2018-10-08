import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./AccordionStyle";
import styles1 from "@root/App/Components/AccordionContent/AccordionContentStyle";
import AccordionContent from "@root/App/Components/AccordionContent/AccordionContent";
import AccordionHeader from "@root/App/Components/AccordionHeader";

export default class AccordionScreen extends Component {
  public render() {
    return (
      <View style={styles1.root}>
        <AccordionContent/>
      </View>
    );
  }
}

