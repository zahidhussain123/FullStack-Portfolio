import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext.jsx";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
      <div className="container home-content">
        <h2>Hi 👋 I'm a</h2>
        <Fade right>
        <h1>
          {" "}
          <Typewriter
            options={{
              strings: [
                "FullStack Developer!",
                "Mern Stack Developer!",
                "React js Developer!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        </Fade>
        <Fade bottom>
        <div className="home-buttons">
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=1234567890"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="btn btn-cv" href={Resume} download="zahid.pdf">
            My Resume
          </a>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
