import * as React from "react";
import {Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import * as Redux from "redux";
// Styles
import styles from "./LoginScreenStyle";
import {RootState} from "@root/App/Reducers";

/**
 * The properties passed to the component
 */
export interface OwnProps {

}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {

}

/**
 * The properties mapped from the global state
 */
export interface StateProps {

}

/**
 * The local state
 */
export interface State {

}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>;

class LoginScreen extends React.Component<Props, State> {
  public state = {};

  public render() {
    return (
      <View style={styles.container}>
        <Text>Hello LoginScreen</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen) as React.ComponentClass<OwnProps>;
