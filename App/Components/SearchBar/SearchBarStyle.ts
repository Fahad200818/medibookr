import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.searchBg,
    padding: Metrics.baseMargin,
  },
  textContainer: {
    backgroundColor: Colors.white,
    padding: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchIcon: {
    fontSize: 14
  },
  label: {
    fontSize: 14,
    color: Colors.coal
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.charcoal,
    marginLeft: Metrics.smallMargin
  }
});
