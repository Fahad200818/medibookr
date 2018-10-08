import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import Header from "./Header";

storiesOf("Header", module)
  .add("Default", () => (
    <Header />
  ));