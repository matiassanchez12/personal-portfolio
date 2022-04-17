import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";

function Contact() {
  const { setCurrentTarget } = React.useContext(Context);
  const { ref, inView } = useInView({
    threshold: 0.2,
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

  return (
    <motion.div animate={animation}>
      <Stack h="100vh" id="Contact" ref={ref}>
        <Heading>Contact</Heading>
      </Stack>
    </motion.div>
  );
}

export default Contact;
