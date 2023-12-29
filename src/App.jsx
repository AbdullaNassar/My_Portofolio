import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return (
    <div className=" bg-primary text-slate-200 ">
      <div className="flex h-screen flex-col ">
        <Header />
        <Hero />
      </div>

      <About />
    </div>
  );
}

export default App;
