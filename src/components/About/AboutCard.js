import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, somos{" "}
            <span className="purple">Delfina Corra y Ulises Bergesio </span>
            de{" "}
            <span className="purple"> Villa Maria - Córdoba, Argentina.</span>
            <br />
            Somos un equipo de apasionados diseñadores web con formación en
            ingeniería de sistemas y desarrollo full stack.
            <br />
            Nos dedicamos a crear experiencias digitales impactantes que
            combinan la estética visual con la funcionalidad excepcional.
            <br />
            <br />3 Puntos Fuertes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enfoque Integrado: Diseñamos y desarrollamos
              sitios web de manera colaborativa para garantizar calidad visual y
              funcional.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Experiencia Técnica Profunda: Con habilidades en
              ingeniería y desarrollo full stack, creamos sitios web óptimos en
              rendimiento y seguridad.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Innovación Constante: Estamos al tanto de las
              últimas tendencias y herramientas para ofrecer soluciones web
              innovadoras y efectivas.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuércese por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">ProDev Technology</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
