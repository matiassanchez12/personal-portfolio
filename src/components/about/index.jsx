import React from "react";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";
import { Link } from "react-scroll";

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
      <Stack h="100vh" id="Sobre mí" ref={ref} gap={8}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color="gray.200">
            Un poco
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color="#afd7fb" margin="0 !important">
            Sobre mí
          </Text>
        </Stack>
        <Stack flex={1} justifyContent="center" gap={4}>
          <Stack flex={{ base: 0, lg: 1 }} alignItems="center">
            <Image
              src="src/assets/img/undraw_designer_re_5v95.svg"
              width={{ base: 150, lg: 200 }}
              h={{ base: 150, lg: 200 }}
              zIndex={2}
            />
          </Stack>
          <Stack flex={2} gap={4} textAlign={{ base: "center", lg: "justify" }} alignItems="center">
            <Text fontSize={{ base: ".9rem", lg: "1rem" }} lineHeight={1.7} maxW={650} letterSpacing={1.2}>
              Soy <b>Programador Frontend</b>, desde hace tiempo me especializo en esta area, tanto en la <b>facultad</b> como de forma{" "}
              <b>autodidacta</b>. Me considero un entuasiasta por el mundo de la informática, y sobre todo por el Desarrollo Web.
              <br /> En mi día a día trabajo para poder crear sitios web con diseños modernos y intuitivos, que disfruto al momento de
              realizarlos, poniendo todo de mí y aprendiendo siempre cosas nuevas. En mis tiempos libres, me gusta leer, mirar
              peliculas o series y juntarme con amigos/familia.
            </Text>
            <Stack alignItems={{ base: "center", lg: "start" }}>
              <Button as={Link} to="Contact" w={40} variant="solid" color="hsl(231, 69%, 90%)" fontSize=".9rem">
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
