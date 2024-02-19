import { h, Component } from "preact";
import "./home_styles.css";
import skillsData from "./skillsData.json";
import Skill from "./Skill";
import "./animation.css";
import walk_on_hill_image from "../images/walking_on_hill.jpg";
import apple_combo from "../images/apple_combo.jpg";
import boat_and_rock_img from "../images/boat_and_rock.jpg";

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
      <div class="skills">
        <div class="story-container">
          <div class="story-item">
            <img src={boat_and_rock_img} alt="boat" />
            <h2 class="story-text">
              <p>
                So what do I bring to the table? If it's Thanksgiving, I'm
                bringing a mean mac and cheese, but more likely than not it's
                not Thanksgiving. Scroll down to see my technical skills and understanding.
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
            <img src={apple_combo} alt="me at Apple" />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
