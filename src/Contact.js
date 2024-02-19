import { h, Component } from "preact";
import "./home_styles.css";
import "./about_styles.css";
import statue_img from "../images/statue.jpg"
import peacock_img from "../images/peacock.jpg";
import headshot_img from "../images/jpw_headshot_blue.jpg";
import sorrento_img from "../images/sorrento.jpg";
  

class Contact extends Component {
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
      <div class="contact">
        <div class="story-container">
          <div class="story-item">
          <img src={peacock_img} alt="Lake Maggiore, peacock" />
            <h2 class="story-text">
              <p>
                Please reach out to me about any job opportunities you think I'd
                be a good fit for. You'll find my contact information below.
              </p>
            </h2>
          </div>
          <div class="story-item">
          <img src={statue_img} alt="Lake Maggiore, statue" />
            <h2 class="story-text">
              <p>
               Contact me via {" "}
                <a href="mailto:cryan27@nd.edu">cryan27@nd.edu</a>
                <br></br>Check out my{" "}
                  <a href="https://www.linkedin.com/in/celina-ryan-870641168/">
                    LinkedIn
                  </a>
              </p>
            </h2>
          </div>
          <div class="story-item">
            <img src={sorrento_img} alt="sorrento sunset" />           
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
