import { Container } from "@chakra-ui/react";
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Habilities from "./components/habilities";
import Presentation from "./components/presentation";
import Footer from "./ui/footer";
import Nav from "./ui/nav";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Nav />
      <Container maxW="container.lg" h="100%">
        <Presentation />
        <About />
        <Projects />
        <Habilities />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
