import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.accordion_header,
    padding: Metrics.baseMargin
  },
  containerRow: {
    flexDirection: "row",
    margin: Metrics.smallMargin,
    justifyContent: 'flex-start'
  },
  text: {
    color: Colors.text,
    fontSize: 12,
    textAlign: "left",
  },
  textBold: {
    fontSize: 12,
    color: Colors.text,
    fontWeight: "bold"
  },

  // Accordion Content

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});
