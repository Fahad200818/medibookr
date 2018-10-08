import {StackNavigator} from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import AccordianScreen from "@root/App/Containers/Accordion/AccordionScreen";

import styles from "./Styles/NavigationStyles";
import Dashboard from "@root/App/Containers/Dashboard/Dashboard";

// Manifest of possible screens


const PrimaryNav = StackNavigator({
  LaunchScreen: {screen: LaunchScreen},
  LandingScreen: {screen: Dashboard},
  AccordianScreen: {screen: AccordianScreen},
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
