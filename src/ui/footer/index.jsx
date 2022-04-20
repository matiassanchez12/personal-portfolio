import React from "react";
import { Link, Stack, Text } from "@chakra-ui/react";
import { AiOutlineLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between" paddingBottom={4}>
      <Stack flex={1} fontSize="0.78rem" color="gray.300">
        <Text margin="0 !important" w="160px" bg="gray.700">
          "Y no soy lo que tengo
        </Text>
        <Text margin="0 !important" w="160px" bg="gray.700">
          Y no soy lo que llevo
        </Text>
        <Text margin="0 !important" w="160px" bg="gray.700">
          Solo soy lo que dejo
        </Text>
        <Text margin="0 !important" w="160px" bg="gray.700">
          Ahora soy un recuerdo"
        </Text>
      </Stack>
      <Stack flex={1} direction="row" justifyContent="end" alignItems="center">
        <Link
          _hover={{ color: "#7190ff" }}
          transition="all .4s ease-in-out"
          href="https://www.linkedin.com/in/matias-sanchez-454152182/"
          target="_blank"
        >
          <AiOutlineLinkedin size={25} />
        </Link>
        <Link _hover={{ color: "#7190ff" }} transition="all .4s ease-in-out" href="https://github.com/matiassanchez12" target="_blank">
          <AiFillGithub size={25} />
        </Link>
        <Link _hover={{ color: "#7190ff" }} transition="all .4s ease-in-out" href="https://github.com/matiassanchez12" target="_blank">
          <AiFillMail size={25} />
        </Link>
      </Stack>
    </Stack>
  );
}

export default Footer;
