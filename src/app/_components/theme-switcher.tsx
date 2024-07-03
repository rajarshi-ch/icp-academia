import { useColorMode, Button, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} aria-label="Toggle color mode">
      <Icon as={colorMode === "light" ? MoonIcon : SunIcon} />
    </Button>
  );
};

export default ColorModeToggle;
