import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import Area from "../inputs/Area";
import Text from "../inputs/Text";

function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({ name: false, email: false, message: false });

  const handleClick = () => {
    if (!name || !email || !message) {
      if (!name) setErrors((errors) => ({ ...errors, name: true }));
      else setErrors((errors) => ({ ...errors, name: false }));

      if (!email) setErrors((errors) => ({ ...errors, email: true }));
      else setErrors((errors) => ({ ...errors, email: false }));

      if (!message) setErrors((errors) => ({ ...errors, message: true }));
      setErrors((errors) => ({ ...errors, message: false }));
      return;
    }
    setErrors({ name: false, email: false, message: false });
  };

  return (
    <Stack w="400px" maxW="100%" h="100%" gap={1}>
      <Text placeholder="Your full name" error={errors.name} value={name} setValue={setName} />
      <Text placeholder="Your Email" error={errors.email} value={email} setValue={setEmail} />
      <Area placeholder="Your Message" error={errors.message} value={message} setValue={setMessage} />
      <Stack>
        <Button
          w="120px"
          bg="hsl(240deg 100% 63%)"
          color="gray.200"
          fontWeight={500}
          _hover={{ bg: "hsl(240deg 100% 66%)" }}
          fontSize=".78rem"
          onClick={handleClick}
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
}

export default Form;
