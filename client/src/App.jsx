// import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import Techstack from "./pages/techStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/contact/Contact";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/mobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const date = new Date().getFullYear()
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <ToastContainer />
        <Layout />
        <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
        </div>
        <div className="footer pb-3 ms-3" style={{paddingBottom: "40px"}}>
          <Tada>
            <h4 className="text-center">ZAHID 😍 Portfolio &copy; {date}</h4>
          </Tada>
        </div>
      </div>
        <ScrollToTop smooth 
          color="#fff"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />
    </>
  );
}

export default App;
