import * as React from "react";
import {Text, View} from "react-native";
import styles from "./FooterStyle";

interface Props {
}

const Footer: React.SFC<Props> = ({}: Props) => (
  <View style={styles.container}>
    <View style={styles.containerRow}>
      <Text style={styles.textBold}>Terms and Conditions</Text>
      <Text style={styles.textBold}>Privacy Policy</Text>
    </View>

    <Text style={styles.text}>Copyright © 2017 Koolocal, Inc. All Rights Reserved.</Text>
  </View>
);

export default Footer;
