"use client"

import { Flex, Link } from "@chakra-ui/react"
import DarkModeToggle from "./DarkModeToggle"
import { getPages } from "@/sanity/sanity-utils";

export default async function Footer () {
    
    // get all of our pages
    const pages = await getPages();

    return (
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
    )
}