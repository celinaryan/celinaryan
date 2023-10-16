import { h, Component } from "preact";
import "./home_styles.css";
import "./exp_styles.css";
import jobData from "./jobData.json";
import Job from "./Job";
import Project from "./Project";
import projectData from "./projectData.json";
import moreExpData from "./moreExpData.json";
import "./animation.css";
import "./button_styles.css";

class Exp extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // Add event listener for scroll
    window.addEventListener("scroll", this.fadeIn);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    // Add event listener for scroll
    window.removeEventListener("scroll", this.fadeIn);
  }

  fadeIn = () => {
    const elements = Array.from(
      document.querySelectorAll(".project, .job-experience, .activity")
    );
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        el.classList.add("fade-in");
      }
    });
  };
  scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };
  handleScroll = () => {
    const newTextElements = Array.from(
      document.querySelectorAll(".story-text")
    );
    const scrollY = window.scrollY;

    newTextElements.forEach((el, i, arr) => {
      const rect = el.parentNode.getBoundingClientRect();
      const vpWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      // Check if the story item is in viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        let newOpacity, newSize;
        if (vpWidth <= 600) {
          // for small screen devices
          newOpacity = Math.min(Math.max((rect.bottom - 100) / 150, 0), 1);
          newSize = 1 + Math.min(Math.max((rect.bottom - 100) / 2000, 0), 0.5);
        } else {
          // for larger screens
          newOpacity = Math.min(Math.max((rect.bottom - 200) / 300, 0), 1);
          newSize = 1 + Math.min(Math.max((rect.bottom - 200) / 1000, 0), 0.5);
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = `${newSize}em`;
      }
    });
  };

  render() {
    return (
      <div class="exp">
        <div class="story-container">
          <div class="story-item">
            <img src="./images/sf_overlook.jpg" alt="Lake Maggiore" />
            <h2 class="story-text">
              <p>
                Here you will find all of my academic and extracurricular
                endeavors. Don't have too much fun!
              </p>
            </h2>
          </div>
          <div class="navbar">
            <button
              className="button-style"
              onClick={() => this.scrollToElement("experience-section")}
            >
              work experience
            </button>
            <button
              className="button-style"
              onClick={() => this.scrollToElement("projects-section")}
            >
              related projects
            </button>
            <button
              className="button-style"
              onClick={() => this.scrollToElement("extracurricular-section")}
            >
              additional experience
            </button>
          </div>
        </div>
        <div className="resume-section">
          <div class="experience-section" id="experience-section">
            <h2>Work Experience</h2>
            {jobData.map((job, index) => (
              <Job job={job} key={index} />
            ))}
          </div>
          {/* Add a line, or use CSS for padding/margins */}
          <div class="projects-section" id="projects-section">
            <h2>Related Projects</h2>
            {projectData.map((project, index) => (
              <Project project={project} key={index} />
            ))}
            {/* Add more as required, similar to job experiences... */}
          </div>
          {/* Add a line, or use CSS for padding/margins */}
          <div class="extracurricular-section" id="extracurricular-section">
            <h2>Additional Experience</h2>
            {moreExpData.map((project, index) => (
              <Project project={project} key={index} />
            ))}
            {/* First Activity */}
          </div>
        </div>
        <div class="story-container">
          <div class="story-item">
            <img src="./images/at_apple.jpg" alt="on Apple campus" />
          </div>
        </div>
      </div>
    );
  }
}
export default Exp;
