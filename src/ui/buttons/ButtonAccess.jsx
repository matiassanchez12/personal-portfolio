import React from "react";
import { Link as LinkChakra, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

function ButtonAccess({ children, isTarget, name }) {
  return (
    <>
      {isTarget ? (
        <LinkChakra as={Link} to={name} display="flex" color="hsl(231, 100%, 99%)" zIndex={20} justifyContent="center">
          <Text
            fontSize={{ sm: ".625rem", md: ".718rem" }}
            position="absolute"
            transition=".4s"
            fontWeight={500}
            opacity={1}
            transform="translateY(28px)"
          >
            {name}
          </Text>
          {children}
        </LinkChakra>
      ) : (
        <LinkChakra as={Link} to={name} display="flex">
          <Text
            fontSize={{ sm: ".625rem", md: ".688rem" }}
            position="absolute"
            fontWeight={500}
            transition=".4s"
            transform="translateY(50px)"
            opacity={0}
          >
            {name}
          </Text>
          {children}
        </LinkChakra>
      )}
    </>
  );
}

export default ButtonAccess;
