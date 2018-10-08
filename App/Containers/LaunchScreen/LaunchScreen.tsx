import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./LaunchScreenStyles";
import SearchItem from "@root/App/Components/SearchResult/SearchItem";
import Filter from "@root/App/Components/Filter/Filter";

export default class LaunchScreen extends Component {
  public render() {
    return (
      <Filter/>
    );
  }
}

