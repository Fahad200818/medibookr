import {storiesOf} from "@storybook/react-native";
import * as React from "react";

import AccordionHeader from "./AccordionHeader";

storiesOf("Footer", module)
  .add("Default", () => (
    <AccordionHeader/>
  ));
