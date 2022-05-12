import React from "react";
import { Grid, GridItem, Img, Stack, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Provider";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import CarrouselMobile from "./CarrouselMobile";

function Projects() {
  const { setCurrentTarget } = React.useContext(Context);
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(2);
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

  const projects = [
    {
      name: "Calendar Todo App",
      urlRepo: "https://github.com/matiassanchez12/todoapp",
      urlDeploy: "https://calendartodo.vercel.app/",
      img: "src/assets/img/calendar.png",
      technologies: ["React", "Next.js", "Chakra UI"],
    },
    {
      name: "Mis gastos App",
      urlRepo: "https://github.com/matiassanchez12/challenge-alkemy",
      urlDeploy: "https://challenge-front-rust.vercel.app/",
      img: "src/assets/img/gastos.png",
      technologies: ["React", "Next.js", "Chakra UI", "Challenge"],
    },
    {
      name: "Portfolio Personal",
      urlRepo: "https://github.com/matiassanchez12/personal-portfolio",
      urlDeploy: "https://portfolio-2-xi.vercel.app/",
      img: "src/assets/img/portfolio.png",
      technologies: ["React", "Chakra UI", "Framer Motion"],
    },
    {
      name: "Easy Bank",
      urlRepo: "https://github.com/matiassanchez12/Easybank-page-",
      urlDeploy: "https://easybank-page-three.vercel.app/",
      img: "src/assets/img/easybank.png",
      technologies: ["React", "Firebase", "Styled components", "Challenge"],
    },
    {
      name: "Where in the world?",
      urlRepo: "https://github.com/matiassanchez12/Flags-page",
      urlDeploy: "https://flagspage.vercel.app/",
      img: "src/assets/img/flagpage.png",
      technologies: ["React", "Styled components", "Challenge"],
    },
    {
      name: "Punto de venta",
      urlRepo: "https://github.com/matiassanchez12/pos",
      urlDeploy: "https://boiling-peak-24210.herokuapp.com/",
      img: "src/assets/img/pointofsale.png",
      technologies: ["Codeigniter 4", "Bootstrap 4", "MySql"],
    },
  ];

  return (
    <motion.div animate={animation}>
      <Stack h={{ base: "80vh", lg: "120vh" }} id="Proyectos" ref={ref} gap={8} marginBottom={10}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color="gray.200">
            Mis más recientes
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color="#afd7fb" margin="0 !important">
            Proyectos
          </Text>
        </Stack>
        <Stack flex={1} flexDirection={{ base: "column", lg: "row" }} gap={4}>
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" w="100%" gap={6}>
            {isMobile ? (
              <CarrouselMobile projects={projects} />
            ) : (
              projects.map((project) => (
                <GridItem
                  borderRadius="10px"
                  bg="hsl(240deg 51% 57% / 61%)"
                  transition="all .3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                  transform="scale(1)"
                >
                  <Img src={project.img} alt="img" borderTopRadius="10px" p={2} height={150} w="100%" objectFit="cover" />
                  <Stack p={2} gap={3}>
                    <Text textAlign="center">{project.name}</Text>
                    <Stack direction="row" justifyContent="center" flexFlow="row wrap" gap={1}>
                      {project.technologies.map((tech) => (
                        <Stack
                          justifyContent="center"
                          borderRadius={4}
                          fontSize={13}
                          p={1}
                          color="#82d5f7"
                          h="24px"
                          border="1px solid #04b6ff"
                        >
                          <Text>{tech}</Text>
                        </Stack>
                      ))}
                    </Stack>
                    <Stack direction="row" justifyContent="center" gap={2}>
                      <Link _hover={{ color: "#afd7fb" }} href={project.urlRepo} target="_blank">
                        <BsGithub size={20} />
                      </Link>
                      <Link _hover={{ color: "#afd7fb" }} href={project.urlDeploy} target="_blank">
                        <FiExternalLink size={20} />
                      </Link>
                    </Stack>
                  </Stack>
                </GridItem>
              ))
            )}
          </Grid>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Projects;
