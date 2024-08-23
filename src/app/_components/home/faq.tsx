"use client";
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
  useColorModeValue,
} from "@chakra-ui/react";
import { BodyText, CustomH2 } from "../styled-text";

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What is ICP blockchain and Who maintains it?",
      answer:
        "ICP is the wordls fastest and most powerful general purpose blockchain, whose purpose is to enable the vision of a decentralized world computer for running software as smart contracts, fully on the blockchain. ICP does not have a single governing body, it is governed by On chain Algorithmic DAO called Network Nervous System. ICP was created and designed by a non profit crypto research organization called DFINITY. DFINITY is the major leading contributer to Internet Computer blockchain and has designed several novel crypto protocols to realize the vision of scalable limitless public blockchain computer.",
    },
    {
      question:
        "What is ICP Coins Academy and how is it related to ICPCoins.com",
      answer:
        "ICPCoins Academy is an educational initiative by Neutrinite DAO, which also built and governs ICPCoins.com. Academy is aimed at providing comprehensive learning resources about the Internet Computer Protocol and its ecosystem.",
    },
    {
      question: "What is Neutrinite DAO?",
      answer: `Neutrinite DAO is a decentralized autonomous organization focused on building innovative smart contract applications on Internet Computer Ecosystem. Neutrinite DAO was founded by NTN Developer team and was tokenized on ICP.
        Neutrinite DAO is governed via voting with Service Nervous System DAO framerwork on ICP using $NTN token. NTN token holders can vote on DAO proposals to upgrade and govern decentralized applications built by NTN DAO. Decentralization Sale or Auction was done using SNS Interface to distribute the tokens to Community Members.`,
    },
    {
      question: "Who vets and creates the content on ICPCoins Academy website?",
      answer:
        "The content in ICPCoins Academy is contributed currently by the Neutrinite DAO development team, who have been building on the Internet Computer blockchain since its mainnet launch. ICPCoins Academy is hosted fully on chain and the updates will go through $NTN DAO voting via SNS proposals.",
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
          <AccordionItem key={index}>
            <AccordionButton py={4}>
              <Text
                flex="1"
                textAlign="left"
                color={useColorModeValue("text.darkGray", "darkMode.textWhite")}
                fontWeight={500}
              >
                {faq.question}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <BodyText textAlign="left">{faq.answer}</BodyText>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>{" "}
    </Flex>
  );
}
