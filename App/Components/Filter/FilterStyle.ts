import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: "#00a7b5"
  },
  image: {
    top: 10,
    width: 40.61,
    height: 37.22,
    position: "absolute",
    alignSelf: 'flex-end',
    right : 25

  },
  text: {
    top: 10,
    width: 134,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(253,250,250,1)",
    fontSize: 18
  },

  rect3: {
    height: "100",
    width: 360.52,
    top: 97.08,
    left: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  },
  rect2: {
    top: 16,
    width: 360,
    height: 300,
    left: 25
  },
  txtSortby: {
    top: 40,
    width: 44,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 13,
    color: "rgba(245,239,239,1)"
  },
  itemPicker: {
    left: 25,
    width: 319,
    height: 49,
    position: "absolute",
    backgroundColor: "white",
    top: 82
  }
});
