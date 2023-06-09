"use client"

import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon /> }
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      variant="ghost"
      color="current"
      marginLeft="2"
    />
  );
};

export default DarkModeToggle;
