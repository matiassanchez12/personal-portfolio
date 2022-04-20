import React from "react";
import { Input } from "@chakra-ui/react";

function Text({ value, setValue, error, placeholder }) {
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Input
      placeholder={placeholder}
      isInvalid={error}
      value={value}
      onChange={handleChange}
      fontSize="0.89rem"
      borderColor="#37607e"
      _hover={{ borderColor: "#37607e" }}
      maxW="100%"
    />
  );
}

export default Text;
