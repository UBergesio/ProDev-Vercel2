import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  //AiFillGithub,
  //AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {/*FaLinkedinIn,*/ FaFacebook, FaWhatsapp } from "react-icons/fa";
import laptopImg from "../../Assets/about.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* ESTE ES POR QUE TIENEN QUE ESTAR EN LA WEB */}

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              POTENCIA TU NEGOCIO CON UNA PRESENCIA EN LINEA <br />
              <span className="purple"> SÓLIDA Y EFECTIVA </span>🚀
            </h1>
            <p className="home-about-body">
              ➜ Alcance <b className="purple">Global </b> 🌍
              <br />
              <br />➜ Credibilidad <b className="purple">Profesional </b> 💼
              <br />
              <br />➜ Mayor <b className="purple">Visibilidad </b> en buscadores
              🔍
              <br />
              <br />➜ Interacción y Participación 🤝 <b className="purple"> </b>
              <br />
              <br />➜ Generación de{" "}
              <b className="purple">Clientes Potenciales </b>💼
              <br />
              <br />
              <br />
              <br />
              <i>
                {" "}
                🔹No te quedes atrás en la era digital!
                <b className="purple">
                  {" "}
                  Contáctanos para una solución perfecta🔹{" "}
                </b>{" "}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>

          {/* ESTE ES POR QUE ELEGIRNOS A NOSOTROS */}

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿POR QUÉ <span className="purple"> ELEGIRNOS? </span>
            </h1>
            <p className="home-about-body">
              Somos un equipo apasionado de desarrolladores web comprometidos
              con ofrecer soluciones innovadoras y de alta calidad para{" "}
              <b className="purple">tu negocio en línea. </b> 🚀
              <br />
              <br />
              Nuestro equipo altamente calificado ha entregado con éxito
              proyectos para una amplia gama de clientes. Desde pequeñas
              empresas hasta grandes corporaciones,
              <i>
                <b className="purple">
                  {" "}
                  nos esforzamos con la excelencia en cada proyecto que
                  emprendemos.
                </b>
              </i>
              <br />
              <br />
              Entendemos que cada negocio es único, &nbsp;
              <i>
                <b className="purple">
                  por eso ofrecemos soluciones personalizadas{" "}
                </b>{" "}
                que se adaptan a tus necesidades{" "}
                <b className="purple">específicas.</b>
              </i>
              <br />
              <br />
              No solo construimos sitios web, construimos  <b className="purple">construimos</b>
              <i>
                <b className="purple">
                  {" "}
                  relaciones duraderas
                </b>
              </i>
              &nbsp;
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRANOS</h1>
            <p>
              No dudes en <span className="purple">contactarte </span> con nosotros
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/5493537666748?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20acerca%20de..."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61556095847269"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
  {/*             <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prodevtechnology/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
