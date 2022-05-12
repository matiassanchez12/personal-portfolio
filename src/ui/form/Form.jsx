import { Button, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import Area from "../inputs/Area";
import Text from "../inputs/Text";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const formRef = React.useRef(null);
  const toast = useToast();

  const handleClick = () => {
    if (!name || !email || !message) {
      setIsError(true);
      toast({
        title: "Porfavor, completar todos los campos",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    emailjs.sendForm("service_yep382r", "template_v93i3th", formRef.current, "Dz37u7O4A-GXzSJx4").then(
      (result) => {
        toast({
          title: "Mensaje enviado!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      },
      (error) => {
        toast({
          title: "Error ocurred. I am working in that, please try later.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    );
    setIsError(false);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Stack as="form" ref={formRef} w="400px" maxW="100%" h="100%" gap={1}>
      <Text name="from_name" placeholder="Nombre" value={name} setValue={setName} isError={isError} />
      <Text name="email" placeholder="Email" value={email} setValue={setEmail} isError={isError} />
      <Area name="message" placeholder="Mensaje" value={message} setValue={setMessage} isError={isError} />
      <input type="hidden" name="to_name" value="Matias" />
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
          Enviar
        </Button>
      </Stack>
    </Stack>
  );
}

export default Form;
