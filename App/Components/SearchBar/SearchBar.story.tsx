import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import SearchBar from "./SearchBar";

storiesOf("SearchBar", module)
  .add("Default", () => (
    <SearchBar />
  ));