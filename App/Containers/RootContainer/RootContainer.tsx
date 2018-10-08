import * as React from "react";
import {StatusBar} from "react-native";
import {connect} from "react-redux";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
// Styles
import styles from "./RootContainerStyles";
import {LoginActions} from "@root/App/Reducers/LoginReducers";
import {SafeAreaView} from "react-navigation";

interface Props {
  test: () => void;
}

interface State {

}

export class RootContainer extends React.Component<Props, State> {

  public componentDidMount() {
    this.props.test();
  }

  public render() {

    return (
      <SafeAreaView style={styles.applicationView}>
        <StatusBar barStyle="dark-content"/>
        <ReduxNavigation/>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    test: () => dispatch(LoginActions.request({email: "syed@medibookr.co", password: "demo123!"})),
  };
};

export default connect(null, mapDispatchToProps)(RootContainer);
