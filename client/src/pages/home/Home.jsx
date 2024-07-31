import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt"

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="container home-content">
        <h2>Hi 👋 I'm a</h2>
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
      </div>
    </div>
  );
};

export default Home;
