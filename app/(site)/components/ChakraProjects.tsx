"use client"

import { getProjects } from "@/sanity/sanity-utils";
import { Box, Heading, Text, Link as ChakraLink, Image } from "@chakra-ui/react";

async function ChakraProjects() {
  const projects = await getProjects();

  return (
    <div>
      <Heading as="h1" size="4xl" fontWeight="extrabold">
        Hello I&apos;m{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, blue.300, blue.500, blue.700)"
          bgClip="text"
        >
          Pedro
        </Text>
        !
      </Heading>

      <Text mt="3" fontSize="xl" color="gray.600">
        Aloha everyone! Check out my projects
      </Text>

      <Heading mt="20" fontWeight="bold" color="gray.700" size="3xl">
        My Projects
      </Heading>
      <Box mt="5" display="grid" gridGap="8" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {projects.map((project) => (
          <ChakraLink
            href={`/projects/${project.slug}`}
            key={project._id}
            border="2px"
            borderColor="gray.500"
            borderRadius="lg"
            p="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {project.image && (
              <Image
                src = {project.image}
                alt={project.name}
                boxSize="100%"
                objectFit={"cover"}
                rounded={"lg"}
                borderColor={"gray.500"}
                //className = "hover:scale-105 hover:border-blue-500 transition"
              />
            )}
            <Text mt="2" fontWeight="extrabold" bgGradient="linear(to-r, blue.300, blue.500, blue.700)" bgClip="text">
              {project.name}
            </Text>
          </ChakraLink>
        ))}
      </Box>
    </div>
  );
}

export default ChakraProjects;