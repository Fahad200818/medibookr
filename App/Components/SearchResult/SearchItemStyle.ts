import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@root/App/Themes";

export default StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
  rect: {
    height: 170,
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom : 5,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 1,
    borderStyle: "solid",
  },
  leftbox: {
    height: "100%",
    width: "33.6%",
    left: "0%",
    position: "absolute",
    flex: 1
  },
  rightBox: {
    height: "100%",
    width: "67.22%",
    left: "32.78%",
    marginRight: 5,
    position: "absolute",
    flex: 1
  },
  image: {
    height: 74,
    width: 74.88,
    left: 19,
    position: "absolute",
    top: "4.83%"
  },
  text: {
    top: "55.52%",
    left: 20,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(99,102,106,1)"
  },
  milesValue: {
    top: "68.38%",
    left: 23,
    width: 38,
    position: "absolute",
    fontWeight: 'bold',
    backgroundColor: "transparent",
    fontSize: 16
  },
  milesText: {
    top: "68.38%",
    left: 51,
    width: 62,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(99,102,106,1)"
  },
  txtDoctorname: {
    top: "10.75%",
    left: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    fontWeight: 'bold',
    fontSize: 16
  },
  txtFamilyMedicine: {
    top: "36.3%",
    left: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(99,102,106,1)"
  },
  labelGender: {
    top: "55.52%",
    left: 1,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(99,102,106,1)"
  },
  labelAge: {
    top: "68.38%",
    left: 2,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(99,102,106,1)"
  },
  txtGenderValue: {
    top: "55.52%",
    left: 63,
    position: "absolute",
    color: "rgba(99,102,106,1)"
  },
  ageValue: {
    top: "68.38%",
    left: 63,
    position: "absolute",
    color: "rgba(99,102,106,1)"
  },
  circleCounter: {
    top: 11.5,
    left: 3,
    width: 30,
    height: 30,
    position: "absolute"
  },
  txtCounter: {
    top: 16,
    left: 5,
    width: 24,
    fontWeight: 'bold',
    position: "absolute",
    color: "#830065"
  },
  txtStatus: {
    top: "88%",
    left: -20,
    width: 161,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(0,167,181,1)"
  }
});
