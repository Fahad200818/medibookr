import * as React from "react";
import {View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import * as Redux from "redux";
import {RootState} from "../../Reducers";
// Styles
import styles from "./SearchCollapsableScreenStyle";

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

class SearchCollapsableScreen extends React.Component<Props, State> {

  public state = {};

  public render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCollapsableScreen) as React.ComponentClass<OwnProps>;
