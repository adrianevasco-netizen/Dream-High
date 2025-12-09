import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TeamMembers } from "./components/TeamMembers";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TeamMembers />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}