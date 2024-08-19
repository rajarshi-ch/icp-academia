import React from "react";
import PrimaryButton from "./primary-button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useColorModeValue , Icon } from "@chakra-ui/react";

const LearnMoreButton: React.FC<{url : string}> = ({ url}) => {
  return (
    <PrimaryButton
      color={useColorModeValue("tertiaryBlue", "darkMode.tertiaryBlue")}
      hasHover={false}
      textColor="text.black"
      leadingIcon={<Icon as={BsArrowUpRightCircleFill} color={useColorModeValue("black", "darkMode.textGray")} boxSize={6}/>}
      url={url}
    >
      Learn More
    </PrimaryButton>
  );
};

export default LearnMoreButton;