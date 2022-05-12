import React from "react";
import { Box, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaReact, FaDatabase } from "react-icons/fa";

function Habilities() {
  const { setCurrentTarget } = React.useContext(Context);
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(3);
      animation.start({
        y: 20,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) animation.start({ y: 0, opacity: 0 });
  }, [inView]);

  const languagesFrontend = ["HTML", "React.js", "CSS", "Redux", "Javascript", "Chakra UI", "Material UI", "Bootstrap"];
  const languagesBackend = ["Node.js", "Firebase", "PHP", "MySQL"];

  return (
    <motion.div animate={animation}>
      <Stack h={{ base: "100vh", lg: "100vh" }} id="Habilidades" ref={ref}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color="gray.200">
            Tecnologías que manejo
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color="#afd7fb" margin="0 !important">
            Habilidades
          </Text>
        </Stack>
        <Stack w="100%" h="100%" paddingTop={10}>
          <Stack direction="row" flexFlow="row wrap" justifyContent="center" alignItems="center" gap={2}>
            <Stack bg="#25315a" borderRadius={6} p={6} minH={280} maxW="100%" alignItems="center" gap={8}>
              <Text fontSize="lg" color="blue.100" display="flex" direction="row" alignItems="center" gap={2}>
                Frontend
                <Box color="blue.200">
                  <FaReact />
                </Box>
              </Text>
              <Grid templateColumns="repeat(2, minmax(120px, 150px))" gap={4}>
                {languagesFrontend.map((language) => (
                  <GridItem as={Stack} alignItems="center" direction="row" gap={2}>
                    <Box color="blue.300">
                      <BsFillPatchCheckFill />
                    </Box>
                    <Stack alignItems="center">
                      <Text fontSize="sm"> {language}</Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>
            </Stack>
            <Stack bg="#25315a" borderRadius={6} margin="0 !important" p={6} minH={280} maxW="100%" alignItems="center" gap={8}>
              <Text fontSize="lg" color="blue.100" display="flex" direction="row" alignItems="center" gap={2}>
                Backend
                <Box color="blue.200">
                  <FaDatabase />
                </Box>
              </Text>
              <Grid templateColumns="repeat(2, minmax(120px, 150px))" gap={4}>
                {languagesBackend.map((language) => (
                  <GridItem as={Stack} alignItems="center" direction="row" gap={2}>
                    <Box color="blue.300">
                      <BsFillPatchCheckFill />
                    </Box>
                    <Stack alignItems="center">
                      <Text fontSize="sm"> {language}</Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Habilities;
