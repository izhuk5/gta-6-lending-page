import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import Final from "./sections/Final.jsx";
import Outro from "./sections/Outro.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
      <Lucia />
      <PostCard />
      <Final />
      <Outro />
    </main>
  )
}

export default App;