import React from "react";
import { Textarea } from "@chakra-ui/react";

function Area({ value, setValue, error, placeholder }) {
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      isInvalid={error}
      resize="none"
      fontSize="0.89rem"
      borderColor="#37607e"
      _hover={{ borderColor: "#37607e" }}
      maxW="100%"
      rows={6}
    />
  );
}

export default Area;
