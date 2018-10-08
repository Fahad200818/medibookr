import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    height: 120,
    width: 359,
    top: 66,
    left: 8,
    position: "absolute"
  },
  rect2: {
    height: 102.5,
    width: 354,
    top: 77,
    left: 14,
    position: "absolute",
    backgroundColor: "rgba(52,178,209,1)",
    opacity: 1,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    borderColor: "#000000",
    borderWidth: 0,
    borderRadius: 0
  },
  text: {
    top: 100,
    left: 38,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  image: {
    height: 30,
    width: 32,
    top: "9.85%",
    left: "8.53%",
    position: "absolute"
  },
  text2: {
    top: 122,
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    left: 38,
    width: 320,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: 11
  },
  rect3: {
    height: 3,
    width: 354,
    top: 77,
    left: 14,
    position: "absolute",
    backgroundColor: "rgba(51,51,51,1)",
    opacity: 1
  },
  rect4: {
    height: 3,
    width: 24,
    top: 77,
    left: 38,
    position: "absolute",
    backgroundColor: "rgba(52,178,209,1)",
    opacity: 1
  },
  image: {
    height: 20,
    width: 36,
    top: 76,
    position: "absolute"
  }


});
