import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App;