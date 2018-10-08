import * as React from "react";
import styles from "./HeaderStyle";
import {Body, Button, Header as NBHeader, Icon, Left, Right} from "native-base";
import {Text, View} from "react-native";

interface Props {
}

const Header: React.SFC<Props> = ({}: Props) => (
  <View style={styles.container}>
    <Text>Logo</Text>
    <Button transparent>
      <Icon style={styles.icon} name='menu'/>
    </Button>

  </View>
);

export default Header;
