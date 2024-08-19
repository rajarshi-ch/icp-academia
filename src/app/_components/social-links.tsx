import { Wrap } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import CustomIconButton from "./buttons/custom-icon-button";
import { GITHUB_URL, TWITTER_URL } from "@/lib/constants";

const accounts = [
  {
    url: GITHUB_URL,
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: TWITTER_URL,
    label: "Twitter Account",
    type: "twitter",
    icon: <BsTwitterX />,
  },
];

function SocialLinks() {
  return (
    <Wrap spacing="3" flexWrap="wrap" overflow="visible">
      {accounts.map((account, index) => (
        <CustomIconButton
          url={account.url}
          icon={account.icon.type}
          key={index}
          isExternal={true}
          aria-label={account.label}
        />
      ))}
    </Wrap>
  );
}

export default SocialLinks;
