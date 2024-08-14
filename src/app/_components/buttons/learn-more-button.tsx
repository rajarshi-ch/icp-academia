import React from "react";
import PrimaryButton from "./primary-button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const LearnMoreButton: React.FC<{url : string}> = ({ url}) => {
  return (
    <PrimaryButton
      color="tertiaryBlue"
      hasHover={false}
      textColor="text.black"
      leadingIcon={<BsArrowUpRightCircleFill color="black" size={24}/>}
      url={url}
    >
      Learn More
    </PrimaryButton>
  );
};

export default LearnMoreButton;