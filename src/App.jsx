import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
// import "react-awesome-reveal/dist/styles.css";
import "wowjs/css/libs/animate.css";
function App() {
  return (
    <div className=" bg-primary text-slate-200 ">
      <div className="flex h-screen flex-col ">
        <Header />
        <Hero />
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
