import React from "react";
import { GridItem, Img, Stack, Link, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import ChakraCarousel from "../../ui/carrousel";

function CarrouselMobile({ projects }) {
  return (
    <ChakraCarousel gap={32}>
      {projects.map((project, index) => (
        <GridItem
          borderRadius="10px"
          bg="hsl(240deg 51% 57% / 61%)"
          transition="all .3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          transform="scale(1)"
        >
          <Img src={project.img} alt="img" borderTopRadius="10px" p={2} height={150} w="100%" objectFit="cover" />
          <Stack p={2} gap={3}>
            <Text textAlign="center">{project.name}</Text>
            <Stack direction="row" justifyContent="center" flexFlow="row wrap" gap={1}>
              {project.technologies.map((tech) => (
                <Stack
                  justifyContent="center"
                  borderRadius={4}
                  fontSize={13}
                  p={1}
                  color="#82d5f7"
                  h="24px"
                  border="1px solid #04b6ff"
                >
                  <Text>{tech}</Text>
                </Stack>
              ))}
            </Stack>
            <Stack direction="row" justifyContent="center" gap={2}>
              <Link _hover={{ color: "#afd7fb" }} href={project.urlRepo} target="_blank">
                <BsGithub size={20} />
              </Link>
              <Link _hover={{ color: "#afd7fb" }} href={project.urlDeploy} target="_blank">
                <FiExternalLink size={20} />
              </Link>
            </Stack>
          </Stack>
        </GridItem>
      ))}
    </ChakraCarousel>
  );
}

export default CarrouselMobile;
