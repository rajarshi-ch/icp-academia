import { Box, useBreakpointValue, Image , Text} from "@chakra-ui/react";

export function AcademyLogo() {
  return (
    <Box as="a" href="/" display="flex" alignItems="center">
      <Image
        src="/assets/logo/icpAcademia icon 2.svg"
        alt="ICPCoins Academy Logo"
        boxSize="28px" // Adjust the size as needed
        mr={2} // Add some margin to the right of the logo
      />
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontWeight={600}
      >
        ICPCoins Academy
      </Text>
    </Box>
  );
}
