import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Button, Row, Col } from 'react-bootstrap';
import Skills from './components/Skills';

import Particles from 'react-particles-js';
// import Particles from 'react-tsparticles';
import dp from './components/dp.png';

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 8,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: 'out',
            },
            shape: {
              type: ['image', 'circle'],
              image: [
                {
                  src: '/components/dp.png',
                  height: 20,
                  width: 23,
                },
                {
                  src: '/k8s.2d579d24.svg',
                  height: 20,
                  width: 20,
                },
                {
                  src: '/code.b3b4c4f4.png',
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: '#CCC',
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      ></Particles>
      <Header />
      <div className="bodySection">
        <SideBar />
        <div className="main">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
