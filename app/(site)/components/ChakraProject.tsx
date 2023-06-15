"use client"
import { Box, Heading, Link, Text, Image, Flex } from "@chakra-ui/react";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export default async function ChakraProject({ params }: Props) {
  
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Heading
          bgGradient="linear(to-r, blue.300, blue.500, blue.700)"
          bgClip="text"
          color="transparent"
          fontSize="4xl"
          fontWeight="extrabold"
          dropShadow={"0 0 0.5rem #000000"}
        >
          {project.name}
        </Heading>

        <Link
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          bg="gray.100"
          rounded="lg"
          color="gray.500"
          fontWeight="bold"
          py={3}
          px={4}
          whiteSpace="nowrap"
          _hover={{ bg: "blue.500", color: "blue.100" }}
          transition="background-color 0.3s, color 0.3s"
        >
          View Project
        </Link>
      </Flex>

      {/* Content goes here*/}
      <Box fontSize="lg" color={"gray.700"} marginTop={10}>
        <PortableText value={project.content} />
      </Box>
      
      {/* Image goes here */}
      <Box marginTop={10} border="2px" borderColor="gray.700" rounded="xl" overflow="hidden">
        <Image
          src={project.image}
          alt={project.name}
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}