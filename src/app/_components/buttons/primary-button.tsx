import { Button, ButtonProps, Link, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryButtonProps extends ButtonProps {
  color?: string;
  hoverColor?: string;
  textColor?: string;
  hasHover?: boolean;
  url?: string;
  onClick?: () => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  color = "black",
  hoverColor = useColorModeValue("gray.600", "whiteAlpha.900"),
  textColor = "white",
  hasHover = true,
  url,
  onClick,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}) => {


  return (
    <Button
      rounded={"md"}
      size={"md"}
      fontWeight={"medium"}
      px={6}
      py={6}
      bg={color}
      color={textColor}
      _hover={ hasHover ? {
        bg: hoverColor,
        boxShadow: "sm",
        transform: "translateY(-2px)",
        textDecor: "none",
      } : {}}
      as={onClick ? "button" : Link}
      href={onClick ? undefined : url}
      {...props}
    >
      {leadingIcon && <span style={{ marginRight: "12px" }}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ marginLeft: "12px" }}>{trailingIcon}</span>}
    </Button>
  );
};

export default PrimaryButton;