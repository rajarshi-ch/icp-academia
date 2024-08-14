import {
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import CustomIconButton from "../buttons/custom-icon-button";
import ColorModeToggle from "./theme-switcher";



function ComponentLinks() {

  const githubRepoUrl = "https://github.com/chakra-ui/chakra-ui";

  const githubLink = (
    <CustomIconButton
      url={githubRepoUrl}
      icon={FaGithub}
    />
  );

  const twitterLink = (
    <CustomIconButton
      url={`https://www.npmjs.com/package/@chakra-ui/react`}
      icon={BsTwitterX}
    />
  );

  return (
    <Wrap spacing="3" flexWrap="wrap" overflow="visible">
      {githubLink}
      {twitterLink}
      <ColorModeToggle />
    </Wrap>
  );
}

export default ComponentLinks;
