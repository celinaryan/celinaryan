import { h, Component } from "preact";
import "./home_styles.css";
import hawaiiTreesImgSrc from "../images/hawaii_trees.jpg";
import lake_mag from "../images/maggiore.jpg";
import amalfi_boat from "../images/amalfi_boat.jpg";
import geis_img from "../images/geis.jpg";

class Home extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

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
      <div class="story-container">
        <div class="story-item">
        <img src={lake_mag} alt="Lake Maggiore" />
          <h2 class="story-text">
            <p>
              Welcome to my personal website. I'm Celina Ryan, a Software Engineer
              that graduated in May 2024 with a B.S. degree in Computer Science at the 
              University of Notre Dame. I created this website to showcase who I am beyond my resume, 
              delve deeper into web development, and highlight what I aim to accomplish in my career.
            </p>
          </h2>
        </div>
        <div class="story-item">
          <img src={hawaiiTreesImgSrc} alt="hawaii" />
          <h2 class="story-text">
            <p>
              I'm currently in the Technology Development Program (TDP) at GEICO. I'm a Software 
              Engineer on the Core Insurance Platform. As a TDP, half of my time is spent taking classes 
              focused on SWE development and the other half of my time is spent contributing 
              to projects on my team.
            </p>
          </h2>
        </div>
        <div class="story-item">
        <img src={geis_img} alt="Geissenheim" />
          <h2 class="story-text">
            <p>
              You're welcome to look around this site and learn more about me. If you'd like to chat,
              please feel free to reach out.
            </p>
          </h2>
        </div>
        <div class="story-item">
          <img src={amalfi_boat} alt="Lake Maggiore" />
        </div>
      </div>
    );
  }
}
export default Home;
