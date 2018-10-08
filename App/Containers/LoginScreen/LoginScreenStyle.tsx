import {StyleSheet} from "react-native";
import {Colors, Metrics} from "../../Themes/";
import ApplicationStyles from "@root/App/Themes/ApplicationStyles";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
});
