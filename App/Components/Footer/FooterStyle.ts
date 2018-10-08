import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: Metrics.baseMargin
  },
  containerRow: {
    flexDirection: "row",
    margin: Metrics.smallMargin,
    justifyContent: "space-around",
  },
  text: {
    color: Colors.text,
    fontSize: 12,
    textAlign: "center",
  },
  textBold: {
    fontSize: 12,
    color: Colors.text,
    fontWeight: "bold"
  }

});
