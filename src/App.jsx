import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

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
    </div>
  );
}

export default App;
