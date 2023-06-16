"use client"

import React from "react";
import { Box } from "@chakra-ui/react";

export default async function ChakraLayout ({ children }: { children: React.ReactNode }) {

  return (
        <Box as="main" py={20}>
          {children}
        </Box>
  );
};