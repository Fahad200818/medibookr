import {storiesOf} from "@storybook/react-native";
import * as React from "react";

import AccordionContent from "./AccordionContent";

storiesOf("Footer", module)
  .add("Default", () => (
    <AccordionContent/>
  ));
