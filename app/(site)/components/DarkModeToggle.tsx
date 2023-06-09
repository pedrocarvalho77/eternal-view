"use client"

import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkModeToggle() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === "light" ? <SunIcon /> :  <MoonIcon/>}
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      variant="ghost"
      color="current"
      marginLeft="2"
    />
  );
};