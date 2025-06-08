import { About, Contact, Hero, Navbar, Tech, Works } from "./";
import { ConfettiCanvas } from "./canvas";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className="relative">
        <Contact />
        <ConfettiCanvas />
      </div>
    </div>
  );
};

export default Home;
