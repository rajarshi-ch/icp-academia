"use client";
import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  LinkProps,
  Box,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import CentralWrapper from "./central-wrapper";
import { Providers } from "../providers";

const links = [
  "Blog",
  "Documentation",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];
const accounts = [
  {
    url: "https://github.com",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://twitter.com",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://linkedin.com",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Providers>
      <CentralWrapper>
        <Stack
          marginInline="auto"
          py={50}
          mt={32}
          spacing={8}
          justifyContent="space-between"
          alignItems="center"
          direction="column"
        >
          <Box as="a" href="/" display="flex" alignItems="center">
            <Image
              src="/assets/logo/icpAcademia icon 2.svg"
              alt="ICPCoins Academy Logo"
              boxSize="28px" // Adjust the size as needed
              mr={4} // Add some margin to the right of the logo
            />
            <Text fontWeight={600}>ICPCoins Academy</Text>
          </Box>

          <Text textAlign="center" color="text.gray">
            © 2024 Neutrinite DAO. All rights reserved
          </Text>

          <Stack
            direction="row"
            spacing={5}
            pt={{ base: 4, md: 0 }}
            alignItems="center"
          >
            {accounts.map((sc, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                colorScheme={sc.type}
                icon={sc.icon}
                rounded="md"
              />
            ))}
          </Stack>
        </Stack>
      </CentralWrapper>
    </Providers>
  );
};

export default Footer;
