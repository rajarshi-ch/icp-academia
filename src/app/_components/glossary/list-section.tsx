import { GlossaryItem } from "@/interfaces/glossary";
import {
  Box,
  Flex,
  VStack,
  Link as ChakraLink,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { BodyText } from "../styled-text";

export default function GlossaryListSection({
  alphabet,
  glossaryItems,
}: {
  alphabet: string;
  glossaryItems: GlossaryItem[];
}) {
  if (!glossaryItems || glossaryItems.length == 0) return null;
  return (
    <Box width="100%" borderBottom="0.5px solid lightgray" py={12}>
      <Stack
        direction={{ base: "column", md: "row" }}
        width="100%"
        height="100%"
        position="relative"
      >
        <Flex flex={1} flexDir="column" height="100%" minH={"70px"}>
          <Box
            fontSize="5xl" // Adjust size as needed
            fontWeight={900}
            color="transparent"
            textAlign={"left"}
            position="absolute"
            top={0}
            left={{ base: 4, md: 12 }}
            css={{
              WebkitTextStroke: useColorModeValue("1px #6B7280", "1px white"), // Adjust stroke width and color as needed
              textStroke: useColorModeValue("1px #6B7280", "1px white"), // Fallback for other browsers
            }}
          >
            {alphabet}
          </Box>
        </Flex>
        <Flex flex={4}>
          <VStack alignItems="flex-start">
            {glossaryItems.map((term) => (
              <Link href={`/glossary/${term.slug}`} key={term.slug} passHref>
                  <Box
                    p={4}
                    width={{ base: "100%", md: "700px" }}
                    borderRadius="xl"
                    _hover={{
                      bg: useColorModeValue(
                        "#ECF5F990",
                        "darkMode.backgroundGray"
                      ),
                    }}
                  >
                    <Text fontWeight="bold" fontSize="xl" mb={2}>
                      {term.title}
                    </Text>
                    <BodyText textAlign="left">{term.description}</BodyText>
                  </Box>              
              </Link>
            ))}
          </VStack>
        </Flex>
      </Stack>
    </Box>
  );
}
