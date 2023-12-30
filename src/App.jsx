import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
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
    </div>
  );
}

export default App;
