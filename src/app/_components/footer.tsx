"use client";
import { Stack, Link, IconButton, Text } from "@chakra-ui/react";
import CentralWrapper from "./central-wrapper";
import { AcademyLogo } from "./academy-logo";
import SocialLinks from "./social-links";

const links = [
  "Blog",
  "Documentation",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];

const Footer = () => {
  return (
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
        <AcademyLogo />

        <Text textAlign="center" color="text.gray">
          © 2024 Neutrinite DAO. All rights reserved
        </Text>
        <SocialLinks />
        {/* <Stack
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
        </Stack> */}
      </Stack>
    </CentralWrapper>
  );
};

export default Footer;
