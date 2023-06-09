"use client"

import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { getPages } from '@/sanity/sanity-utils'
import DarkModeToggle from "./DarkModeToggle";

export async function ChakraLayout ( {children} : {children: React.ReactNode}) {

  // get all of our pages
  const pages = await getPages();
  
  return (
      <Box maxW="5xl" mx="auto" px={5} py={10}>
        <Flex align="center" justify="space-between">
          <Link href="/" bgGradient="linear(to-r, blue.300, blue.500, blue.700)" bgClip="text" color="transparent" fontSize="lg" fontWeight="bold">
            Pedro
          </Link>
          <Flex align="center" gap={5} fontSize="sm" color="gray.600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} textDecoration="underline" _hover={{ textDecoration: "none" }}>
                {page.title}
              </Link>
            ))}
          </Flex>
            <DarkModeToggle/>
        </Flex>
        <Box as="main" py={20}>
          {children}
        </Box>
        <Text as="footer" textAlign="right" color="gray.600">
          &copy; 2023 Pedro Carvalho. All rights reserved.
        </Text>
      </Box>
  );
};

export default ChakraLayout;
