import * as React from "react";
import {Text, View} from "react-native";
import styles from "./AccordionHeaderStyle";
import {Icon} from "native-base";

interface Props {
  isSelected : boolean, isFirstNode : boolean
}

const Footer: React.SFC<Props> = ({isSelected,isFirstNode}: Props) => (
  <View style={styles.container}>
    <View style={styles.containerRow}>
      <Text style={styles.textBold}>Provider (23)</Text>
    </View>
  </View>
);

export default Footer;
