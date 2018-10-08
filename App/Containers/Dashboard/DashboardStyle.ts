import {StyleSheet} from "react-native";
import {Colors, Metrics} from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  billboardContainer: {
    width: "100%",
  },
  welcomeText: {
    position: "absolute",
    backgroundColor: "transparent",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 24,
    top: Metrics.marginVertical,
    left: Metrics.marginHorizontal
  },
  imageBillboard: {
    width: "100%",
  }
});
