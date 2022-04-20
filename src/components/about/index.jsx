import React from "react";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";

function About() {
  const { setCurrentTarget } = React.useContext(Context);
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(1);
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

  return (
    <motion.div animate={animation}>
      <Stack h="80vh" id="About" ref={ref} gap={12}>
        <Stack textAlign="center">
          <Text fontSize=".9rem" letterSpacing=".5px" color="gray.200">
            A little
          </Text>
          <Text fontSize="1.23rem" letterSpacing=".6px" color="#afd7fb" margin="0 !important">
            About me
          </Text>
        </Stack>
        <Stack flex={1} direction="row" justifyContent="center">
          <Stack flex={1} alignItems="center">
            <Image src="https://bit.ly/dan-abramov" width={250} h={250} borderRadius={10} />
          </Stack>
          <Stack flex={1} gap={4}>
            <Text fontSize=".9rem" maxW={400} lineHeight={1.4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod ducimus perspiciatis quisquam vitae hic molestiae
              earum! Tempora possimus accusantium ducimus libero qui pariatur magnam quisquam facere, cupiditate fugit corrupti.
            </Text>
            <Stack>
              <Button w={40} variant="solid" color="hsl(231, 69%, 90%)" fontSize="sm">
                Contactame!
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default About;
