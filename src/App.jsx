import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  )
}

export default App;