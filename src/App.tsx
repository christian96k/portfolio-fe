import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import Home from './pages/home/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import GridDistortion from './components/a-framer-motion/grid-distortion/GridDistortion';
import { IMAGES_PATH } from './core/constants/images.path';
import { useState } from 'react';
import Loader from './components/loader/Loader';

function App() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {!isReady && (
        <section className="main__loading hvh-100 bg-black">
          <Loader/>
        </section>
      )}

      <ParallaxProvider>
        <GridDistortion
          imageSrc={IMAGES_PATH.BG_PRISM}
          grid={600}
          mouse={0.15}
          strength={0.05}
          relaxation={0.9}
          className="custom-class"
          onReady={() => setIsReady(true)} 
        />
        {isReady && <Home />}
      </ParallaxProvider>
    </>
  );
}

export default App
