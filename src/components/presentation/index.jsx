import React from "react";
import { Avatar, Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";

function Presentation() {
  const { setCurrentTarget } = React.useContext(Context);
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(0);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: -40,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} layout animate={animation} exit={{ opacity: 0 }} initial={{ y: -40, opacity: 0 }}>
      <Stack h="100vh" justifyContent="center" id="Home">
        <Stack justifyContent="center" minH={500} gap={4}>
          <Stack alignItems="center">
            <Box>
              <Avatar
                backgroundColor="transparent"
                p={1}
                border="2px solid #007eeb"
                boxSizing="content-box"
                size="2xl"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </Box>
          </Stack>
          <Stack alignItems="center" gap={4}>
            <Stack textAlign="center">
              <Text fontSize={{ base: "1.3rem", lg: "1.6rem" }} fontWeight="500" marginTop="0 !important">
                Matias Sanchez
              </Text>
              <Text fontSize={{ base: "1rem", lg: "1.1rem" }} color="hsl(231, 69%, 80%)" margin="0 !important">
                Frontend Developer
              </Text>
            </Stack>
            <Stack direction="row">
              <Link
                _hover={{ color: "#7190ff" }}
                transition="all .4s ease-in-out"
                href="https://www.linkedin.com/in/matias-sanchez-454152182/"
                target="_blank"
              >
                <AiOutlineLinkedin size={25} />
              </Link>
              <Link
                _hover={{ color: "#7190ff" }}
                transition="all .4s ease-in-out"
                href="https://github.com/matiassanchez12"
                target="_blank"
              >
                <AiFillGithub size={25} />
              </Link>
            </Stack>
          </Stack>
          <Stack alignItems="center">
            <Button>
              <Text fontSize="smaller" marginRight={2}>
                Download CV
              </Text>
              <AiOutlineDownload />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Presentation;
