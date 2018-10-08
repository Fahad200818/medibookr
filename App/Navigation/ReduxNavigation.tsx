import {RootState} from "@root/App/Reducers";
import * as React from "react";
import {connect} from "react-redux";
import AppNavigation from "./AppNavigation";

// here is our redux-aware smart component
function ReduxNavigation(props: any) {
  return <AppNavigation/>;
}

const mapStateToProps = (state: RootState) => ({nav: state.nav});
export default connect(mapStateToProps)(ReduxNavigation);
