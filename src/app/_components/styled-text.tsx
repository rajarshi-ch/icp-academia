"use client";
import { Text, useColorModeValue } from "@chakra-ui/react";

export function CustomH1({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Text
      fontWeight={900}
      fontSize={{ base: "4xl", md: "6xl" }}
      lineHeight={"110%"}
      color={useColorModeValue("black", "darkMode.white")}
      textAlign={{ base: "center", md: "left" }}
      mb={3}
      {...props}
    >
      {children}
    </Text>
  );
}

export function CustomH2({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Text
      fontWeight={900}
      fontSize={{ base: "3xl", md: "4xl" }}
      lineHeight={"110%"}
      color={useColorModeValue("black", "darkMode.textWhite")}
      mb={4}
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}

export function BodyText({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Text
      fontSize={"lg"}
      mb={4}
      color={useColorModeValue("text.gray", "darkMode.textGray")}
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}
