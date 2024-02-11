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
              Welcome to my personal website. I'm Celina Ryan, a Computer
              Science major at the University of Notre Dame. I made this website
              to tell potential employers a bit more about myself beyond my
              resume, to dig a bit deeper into web development, and to explain
              what I hope to achieve with my career.
            </p>
          </h2>
        </div>
        <div class="story-item">
          <img src={hawaiiTreesImgSrc} alt="hawaii" />
          <h2 class="story-text">
            <p>
              I'm currently a senior and graduating in May 2024. I'm looking for a full-time 
              software development and/or engineering position. I’m open to exploring new places
              and would be happy to start my career anywhere...
            </p>
          </h2>
        </div>
        <div class="story-item">
        <img src={geis_img} alt="Geissenheim" />
          <h2 class="story-text">
            <p>
              My areas of preference are Austin, New York City, Denver, the Bay area, and the 
              Washington D.C. area, but I’m always open to exploring new places. So that's my spiel. 
              You're welcome to look around this site and learn more about me. If you'd like to chat
              about a potential position, please feel free to reach out.
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
