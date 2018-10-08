import * as React from "react";
import {Image, Text, View} from "react-native";
import {connect} from "react-redux";
import * as Redux from "redux";
// Styles
import styles from "./DashboardStyle";
import {RootState} from "@root/App/Reducers";
import Footer from "@root/App/Components/Footer/Footer";
import Header from "@root/App/Components/Header/Header";
import SearchBar from "@root/App/Components/SearchBar/SearchBar";
import {Images} from "@root/App/Themes";
import Fonts from "@root/App/Themes/Fonts";

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
  user: string;
}

/**
 * The local state
 */
export interface State {
  latitude: number,
  longitude: number,
}

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props, State> {
  public state = {
    latitude: 0,
    longitude: 0,
  };

  public componentDidMount() {
    //this.props.callService("MRI Head", "33.023482", "-96.714319");
    /*navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });*/
  }

  public render() {
    return (
      <View style={styles.container}>
        <Header/>
        <SearchBar latitude={this.state.latitude} longitude={this.state.longitude}/>
        <View style={styles.billboardContainer}>
          <Image style={styles.imageBillboard} source={Images.Billboard} resizeMode="stretch"/>
          <Text style={[Fonts.style.h1, styles.welcomeText]}>Welcome Back, Tom</Text>
        </View>
        <View style={styles.container}/>
        <Footer/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    user: state.login.data && state.login.data.email
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) as React.ComponentClass<OwnProps>;
