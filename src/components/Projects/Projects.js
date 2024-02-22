import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Nuestros recientes <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estan algunos proyectos en los que hemos trabajado recientemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dtfp8liuv/image/upload/c_crop,w_676,h_380,ar_16:9/v1708557666/ProDev%20Portfolio/buengusto_2_fm9s9l.png"}
              isBlog={false}
              title="El Buen Gusto"
              description="Landing page visualmente atractiva y persuasiva para un servicio de catering exclusivo. El diseño centrado en la experiencia del usuario y la implementación de llamadas a la acción efectivas resultaron en una mayor generación de clientes potenciales."
              ghLink="https://github.com/UBergesio/El_buen_gusto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dtfp8liuv/image/upload/c_crop,w_500,h_380/v1708558629/ProDev%20Portfolio/Dise%C3%B1o_sin_t%C3%ADtulo__2_-removebg-preview_q0dd9r.png"}
              isBlog={false}
              title="CodeCraft Templates"
              description="E-commerce de templates con una interfaz intuitiva y atractiva, permitiendo a los usuarios explorar y adquirir fácilmente una variedad de plantillas de alta calidad. La integración de funciones de búsqueda avanzada y opciones de pago seguras garantizan una experiencia de compra fluida."
              ghLink="https://github.com/FrancoA56/FinalProjectClient"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dtfp8liuv/image/upload/c_crop,w_500,h_380/v1708558892/ProDev%20Portfolio/Dise%C3%B1o_sin_t%C3%ADtulo__3_-removebg-preview_twyffo.png"}
              isBlog={false}
              title="Punto Cars"
              description="Desarrollé un e-commerce para una agencia de autos, ofreciendo una plataforma intuitiva para que los clientes puedan explorar y comprar vehículos. La implementación de características como búsqueda avanzada, comparación de modelos y solicitud de prueba de manejo garantizó una experiencia de usuario completa y satisfactoria."
              ghLink="https://github.com/D31f1/punto_cars_multimarca"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dtfp8liuv/image/upload/c_crop,w_500,h_380/v1708558893/ProDev%20Portfolio/Dise%C3%B1o_sin_t%C3%ADtulo__4_-removebg-preview_l2luks.png"}
              isBlog={false}
              title="Rick And Morty"
              description="Desarrollé una aplicación web usando una API de Rick and Morty durante mi curso en la academia. Esta integración mostró datos dinámicos sobre personajes, episodios y ubicaciones, demostrando mi habilidad para trabajar con APIs en proyectos web."
              ghLink="https://github.com/UBergesio/Proyecto_Rick_and_Morty"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dtfp8liuv/image/upload/c_crop,w_500,h_380/v1708558890/ProDev%20Portfolio/Dise%C3%B1o_sin_t%C3%ADtulo__5_-removebg-preview_bdhrij.png"}
              isBlog={false}
              title="Pokemons"
              description="Esta aplicación permitía a los usuarios explorar información dinámica sobre Pokémon, como estadísticas, habilidades y tipos, demostrando mi capacidad para trabajar con datos externos en proyectos web."
              ghLink="https://github.com/UBergesio/Pokemons_Proyect"
            />
          </Col>

      

{/*           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
