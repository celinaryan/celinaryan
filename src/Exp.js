import { h, Component } from "preact";
import "./home_styles.css";
import "./exp_styles.css";
import jobData from "./jobData.json";
import Job from "./Job";
import Project from "./Project";
import projectData from "./projectData.json";
import moreExpData from "./moreExpData.json";
import univData from "./universityContData.json"
import "./animation.css";
import "./button_styles.css";
import apple_image from "../images/at_apple.jpg";
import nd_snow from "../images/nd_snow.jpg";
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
    const windowHeight = window.innerHeight;

    newTextElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      let rectCenter =
        rect.top +
        rect.height /
          2; /* center Y-coordinate of the element in the viewport */
    //   let rectCenter = rect.top;
    //   // For the first element, we consider only the top edge
    //   // For other elements, we still rely on the center.
    //   if(index !== 0){
    //     rectCenter += rect.height / 4; /* center Y-coordinate of the element in the viewport */
    //  }

      let newOpacity = 0;
      let newSize = 1.5; /* font size for smaller screens */

      // larger screens
      if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min((2 * (windowHeight - rectCenter)) / windowHeight, 1), 0.8);
          newSize += newOpacity / 1.5; /* so the size will range from 0 to 3 */
      }
      // smaller screens
      else {
        let helper = Math.max(Math.min((3 * rectCenter) / windowHeight, 1), 0.7);
        if(index == 0){
          newOpacity = Math.max(Math.min((3 * rectCenter) / windowHeight, 1), 0.9);
          newSize += helper / 2; /* so the size will range from 1.5 to 3 */
        }
        else{
          newOpacity = helper;
          newSize += helper / 2; /* so the size will range from 1.5 to 3 */
        }
       
      }

      el.style.opacity = newOpacity;
      el.style.fontSize = `${newSize}em`;
    });
  };

  render() {
    return (
      <div class="exp">
        <div class="story-container">
          <div class="story-item">
          <img src={nd_snow} alt="Snowy Notre Dame" />
            <h2 class="story-text">
              <p>
                Here you will find all of my academic and extracurricular
                endeavors. Enjoy!
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
              onClick={() => this.scrollToElement("university-section")}
            >
              university contributions
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
          <div class="university-section" id="university-section">
            <h2>University Contributions and Leadership</h2>
            {univData.map((project, index) => (
              <Project project={project} key={index} />
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
          <img src={apple_image} alt="Apple Interns" />
          </div>
        </div>
      </div>
    );
  }
}
export default Exp;
