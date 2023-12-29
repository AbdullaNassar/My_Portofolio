import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return (
    <div className=" text-slate-200 bg-primary ">
      <div className="flex h-screen flex-col ">
        <Header />
        <Hero />
      </div>
      {/* <h1>ghll</h1> */}
    </div>
  );
}

export default App;
