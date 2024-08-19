import { Wrap } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "./theme-switcher";
import SocialLinks from "../social-links";

function ComponentLinks() {
  return (
    <Wrap spacing="3" flexWrap="wrap" overflow="visible">
      <SocialLinks />
      <ColorModeToggle />
    </Wrap>
  );
}

export default ComponentLinks;
