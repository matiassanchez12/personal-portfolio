import React from "react";
import { Stack } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFileText } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import ButtonAccess from "../buttons/ButtonAccess";
import Indicator from "../buttons/Indicator";
import { Context } from "../../Provider";

function Nav() {
  const { currentTarget } = React.useContext(Context);

  return (
    <Stack
      direction="row"
      bg="rgb(199 181 255 / 13%)"
      overflow="hidden"
      p="1.5rem .5rem"
      w="328px"
      h="72px"
      maxW="100%"
      boxShadow="0 8px 32px hsla(231, 44%, 45%, .2)"
      borderRadius={6}
      gap="2rem"
      justifyContent="center"
      position="fixed"
      transform={{ base: "scale(0.8)", md: "scale(0.9)", lg: "scale(1.1)" }}
      margin="auto"
      bottom="2rem"
      left="0"
      right={0}
      zIndex={20}
    >
      <ButtonAccess isTarget={currentTarget === 0} name="Home">
        <AiOutlineHome size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 1} name="About">
        <AiOutlineUser size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 2} name="Habilities">
        <BsBook size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 3} name="Contact">
        <AiOutlineFileText size="1.5rem" />
      </ButtonAccess>
      <Indicator index={currentTarget} />
    </Stack>
  );
}

export default Nav;
