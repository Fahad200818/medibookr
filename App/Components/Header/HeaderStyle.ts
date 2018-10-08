import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Metrics.marginHorizontal,
    flexDirection: 'row',
    height: 50,
  },
  icon: {
    color: Colors.white
  }
});
