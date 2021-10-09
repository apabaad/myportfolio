import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Particles from 'react-tsparticles';

const AboutMe = () => {
  const text = `I am a passionate and diligent student seeking a career opportunity in an
  organization where
  I can leverage and further enhance my technical skills
  as a full-stack developer. I enjoy working with MERN stack projects,
  Redux, REST APIs, SQL, and data analytics with python.`;
  return (
    <div className="about">
      {text}
      <div className="buttons">
        <a href="">
          <Button variant="outline-primary hireme"> Hire Me</Button>
        </a>
        <a href="/">
          <Button variant="danger"> Resume</Button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
