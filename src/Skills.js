import { h, Component } from "preact";
import "./home_styles.css";
import skillsData from "./skillsData.json";
import Skill from "./Skill";
import "./animation.css";
class Skills extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
  handleScroll = () => {
    this.fadeIn();
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
            <img src="./images/boat_and_rock.jpg" alt="Lake Maggiore" />
            <h2 class="story-text">
              <p>
                So what do I bring to the table? If it's Thanksgiving, I'm
                bringing a mean mac and cheese, but more likely than not it's
                not Thanksgiving. Scroll down to see my technical skills.
              </p>
            </h2>
          </div>
        </div>
        <div class="skills-section">
          {skillsData.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </div>

        <div class="story-container">
          <div class="story-item">
            <img src="./images/walking_on_hill.jpg" alt="boat in amalfi" />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
