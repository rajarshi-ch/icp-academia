import { Button, ButtonProps, IconButton, Link, useColorModeValue } from "@chakra-ui/react";

type CustomIconButtonProps = ButtonProps & {
  icon: React.ElementType;
  url?: string;
  iconSize?: number | string;
  iconColor?: string;
};

/**
 * CustomIconButton component
 *
 * This component renders a button with an icon. If an `onClick` prop is provided,
 * it behaves as a button. If no `onClick` prop is provided, it behaves as a link.
 *
 * Props:
 * - `icon` (React.ElementType): The icon to be displayed inside the button.
 * - `url` (string, optional): The URL to navigate to if the button behaves as a link.
 * - `iconSize` (string, optional): The size of the icon.
 * - `iconColor` (string, optional): The color of the icon.
 * - `onClick` (function, optional): The click handler function. If provided, the button
 *   behaves as a button; otherwise, it behaves as a link.
 * - Other props inherited from `ButtonProps`.
 *
 * Example usage:
 * ```
 * <CustomIconButton
 *   icon={SomeIcon}
 *   url="https://example.com"
 *   iconSize="24px"
 *   iconColor="blue.500"
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 */

export default function CustomIconButton(props: CustomIconButtonProps) {
  const {
    icon: BtnIcon,
    url,
    iconSize = 10, // Default icon size
    iconColor = "gray.400",
    onClick,
    ...rest
  } = props;
  return (
    <IconButton
      as={onClick ? "button" : Link}
      href={onClick ? undefined : url}
      // isExternal={!onClick}
      isRound={true}
      aria-label={props["aria-label"] || "icon-button"}
      icon={<BtnIcon color={iconColor} />}
      fontWeight="normal"
      // variant="unstyled" // Remove border and background
      color={useColorModeValue("gray.400", "whiteAlpha.700")}
      _hover={{
        color: useColorModeValue("gray.900", "whiteAlpha.900"),
        boxShadow: "sm",
        transform: "translateY(-2px)",
        textDecor: "none",
      }}
      onClick={onClick}
      {...rest}
    />
  );
}
