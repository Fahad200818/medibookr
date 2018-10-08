import * as React from "react";
import {Text, TextInput, View} from "react-native";
import styles from "./SearchBarStyle";
import {Colors} from "@root/App/Themes";
import {Icon} from "native-base";

interface Props {
  latitude?: number;
  longitude?: number;
  onSearchInput?: (keyword: string) => void;
  onLocationInput?: (location: string) => void;
}

const SearchBar: React.SFC<Props> = ({latitude, longitude, onLocationInput, onSearchInput}: Props) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text>Find :</Text>
      <TextInput
        style={styles.input}
        placeholder={"Doctor, Procedure, Speciality"}
        onChangeText={onSearchInput}
        placeholderTextColor={Colors.charcoal}
      />
    </View>
    <View style={[styles.textContainer, {marginTop: 1}]}>
      <Text>Location :</Text>
      <TextInput
        style={styles.input}
        placeholder={latitude && longitude ? "Near You" : "Enter City"}
        placeholderTextColor={Colors.charcoal}
        onChangeText={onLocationInput}
      />
      <Icon style={styles.searchIcon} name='search'/>

    </View>
  </View>
);

export default SearchBar;
