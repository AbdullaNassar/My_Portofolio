import { Toaster } from "react-hot-toast";
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
    <div className="from-primaryLight2 bg-gradient-to-r to-primary text-slate-200 ">
      <div className="flex h-screen flex-col ">
        <Header />
        <Hero />
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
}

export default App;
