import { Button, ButtonProps, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryButtonProps extends ButtonProps {
  color?: string;
  hoverColor?: string;
  textColor?: string;
  hasHover?: boolean;
  isExternal?: boolean;
  url?: string;
  onClick?: () => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  color = "black",
  hoverColor = "gray.600",
  textColor = "white",
  hasHover = true,
  isExternal = false,
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
      isExternal={isExternal}
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