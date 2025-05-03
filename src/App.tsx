import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import Home from './pages/home/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <ParallaxProvider>
      <Home/>
    </ParallaxProvider>
  )
}

export default App
