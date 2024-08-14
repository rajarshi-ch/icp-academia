import { GlossaryItem } from "@/interfaces/glossary";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link as ChakraLink,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

export default function GlossaryListSection({
  alphabet,
  glossaryItems,
}: {
  alphabet: string;
  glossaryItems: GlossaryItem[];
}) {
  if (!glossaryItems || glossaryItems.length == 0) return null;
  return (
    <Box width="100%" borderBottom="0.5px solid lightgray" py={12} >
      <HStack width='100%' height='100%' position='relative'> 
        <Flex flex={1} flexDir='column' height='100%'>
          <Box
              fontSize="5xl" // Adjust size as needed
              fontWeight={900}
              color="transparent"
              textAlign={"left"}
              position='absolute'
              top={0}
              left={12}
              css={{
                WebkitTextStroke: "1px #6B7280", // Adjust stroke width and color as needed
                textStroke: "1px #6B7280" // Fallback for other browsers
              }}
            >
              {alphabet}
            </Box>
        </Flex>
        <Flex flex={4}>
          <VStack alignItems="flex-start">
            {glossaryItems.map((term) => (
              <Link href={`/glossary/${term.slug}`} key={term.title} passHref>
                <ChakraLink
                  textDecoration="none"
                  _hover={{ bg: 'lightgray'}}
                >
                  <Box p={4} width="700px" borderRadius='xl' _hover={{ bg: '#ECF5F990'}}>
                    <Text fontWeight="bold" fontSize="xl" mb={2}>
                      {term.title}
                    </Text>
                    <Text color="text.gray">{term.description}</Text>
                  </Box>
                </ChakraLink>
              </Link>
            ))}
          </VStack>
        </Flex>
      </HStack>
    </Box>
  );
}
