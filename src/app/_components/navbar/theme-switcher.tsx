import { useColorMode } from "@chakra-ui/react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import CustomIconButton from "../buttons/custom-icon-button";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <CustomIconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? MdDarkMode : MdOutlineLightMode}
    />
  );
};

export default ColorModeToggle;
