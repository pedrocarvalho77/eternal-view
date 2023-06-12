"use client";
import { getPage} from "@/sanity/sanity-utils";
import { Box, Heading, Flex,Image } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";

type Props = {

  params: {slug: string}

};

export default async function ChakraPage( { params }: Props ) {

    const page = await getPage(params.slug);
    return (
      <Box>
        <Heading
          bgGradient="linear(to-r, blue.300, blue.500, blue.700)"
          bgClip="text"
          color="transparent"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="extrabold"
        >
          {page.title}
        </Heading>
        <Flex gap={10}>
          {page.image && (
            <Image
              src={page.image}
              alt={page.title}
              width={350}
              height={350}
              marginTop={10}
              border={2}
              borderColor="gray.700"
              objectFit="cover"
              rounded="xl"
            />
          )}
          <Box fontSize="lg" color={"gray.700"} marginTop={10}>
            <PortableText value={page.content} />
          </Box>
        </Flex>
      </Box>
    );
};