// import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import Techstack from "./pages/techStack/TechStack";

function App() {
  return (
    <>
      <div>
        <Layout />
        <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
