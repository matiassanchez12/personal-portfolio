import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";
import Form from "../../ui/form/Form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../../ui/footer";

function Contact() {
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

  return (
    <motion.div animate={animation}>
      <Stack h={{ base: "100vh", lg: "80vh" }} id="Contact" gap={6} ref={ref} paddingTop={6}>
        <Stack textAlign="center">
          <Text fontSize=".9rem" letterSpacing=".5px" color="gray.200">
            Let's work together!
          </Text>
          <Text fontSize="1.23rem" letterSpacing=".6px" color="#afd7fb" margin="0 !important">
            Contact
          </Text>
        </Stack>
        <Stack flex={1} direction="row" justifyContent="center" gap={6} flexFlow="row wrap">
          <Stack gap={1} direction={{ base: "row", lg: "column" }}>
            <Stack borderRadius={5} bg="#25315a" direction="row" alignItems="center" p={3} gap={3}>
              <FaMapMarkerAlt size={20} />
              <Stack>
                <Text fontSize="0.8rem">Address</Text>
                <Text fontSize="0.7rem" color="gray.300" fontWeight={300}>
                  Buenos Aires, Argentina
                </Text>
              </Stack>
            </Stack>
            <Stack borderRadius={5} bg="#25315a" direction="row" alignItems="center" p={3} gap={3}>
              <MdEmail size={20} />
              <Stack>
                <Text fontSize="0.8rem">Email</Text>
                <Text
                  fontSize="0.7rem"
                  color="gray.300"
                  transition="all .3s ease-in-out"
                  fontWeight={300}
                  _hover={{ cursor: "pointer", color: "gray.400" }}
                >
                  matias.sanchez.0097@gmail.com
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Form />
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Contact;
