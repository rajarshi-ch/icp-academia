import { FaqItem } from "@/interfaces/faq";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CustomH2 } from "../styled-text";

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "Who maintains the ICP blockchain?",
      answer:
        "The Internet Computer Protocol (ICP) is maintained by the DFINITY Foundation, a non-profit organization based in Zurich, Switzerland, along with a global community of independent data centers.",
    },
    {
      question: "How is ICPCoins Academy related to icpcoins.com?",
      answer:
        "ICPCoins Academy is an educational initiative by icpcoins.com aimed at providing comprehensive learning resources about the Internet Computer Protocol and its ecosystem.",
    },
    {
      question: "What is Neutrinite DAO?",
      answer:
        "Neutrinite DAO is a decentralized autonomous organization focused on fostering innovation and development within the Internet Computer ecosystem.",
    },
    {
      question: "Who vets the content in ICPCoins Academy?",
      answer:
        "The content in ICPCoins Academy is vetted by a team of experts and contributors from the ICP community to ensure accuracy and relevance.",
    },
  ];
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={14}
    >
      <CustomH2>Frequently Asked Questions</CustomH2>
      <Accordion allowToggle w="100%" maxW="800px" mt={10}>
        {faqs.map((faq, index) => (
          <AccordionItem >
            <AccordionButton py={4}>
              <Text
                flex="1"
                textAlign="left"
                color="text.darkGray"
                fontWeight={500}
              >
                {faq.question}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color="text.gray">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>{" "}
    </Flex>
  );
}
