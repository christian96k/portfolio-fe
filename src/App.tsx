import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import Home from './pages/home/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import GridDistortion from './components/a-framer-motion/grid-distortion/GridDistortion';
import { IMAGES_PATH } from './core/constants/images.path';

function App() {

  return (
    <ParallaxProvider>
      <GridDistortion
        imageSrc={IMAGES_PATH.BG_PRISM}
        grid={20}
        mouse={0.15}
        strength={0.15}
        relaxation={0.9}
        className="custom-class "
      />
      <Home/>
    </ParallaxProvider>
  )
}

export default App
