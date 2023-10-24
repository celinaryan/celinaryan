import { h, Component } from "preact";
import "./home_styles.css";
import "./about_styles.css";
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

    newTextElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const rectCenter =
        rect.top +
        rect.height /
          2; /* center Y-coordinate of the element in the viewport */

      let newOpacity = 0;
      let newSize = 1.5; /* font size for smaller screens */

      // larger screens
      if (window.innerWidth > 961) {
        newOpacity = Math.max(
          Math.min((2 * (windowHeight - rectCenter)) / windowHeight, 1),
          0
        );
        newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
      }
      // smaller screens
      else {
        newOpacity = Math.max(Math.min((2 * rectCenter) / windowHeight, 1), 0);
        newSize += newOpacity / 2; /* so the size will range from 1.5 to 3 */
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
          <div class="about-section">
            <div class="quick-look-section">
              <div class="quick-look-bullets">
                <h3 class="quicklook-title">
                  <u>Celina Ryan</u>
                </h3>
                <h3 class="quicklook-title">
                  Contact me via:{" "}
                  <a href="mailto:cryan27@nd.edu">cryan27@nd.edu</a>
                </h3>
                <h3 class="quicklook-title">
                  Check out my{" "}
                  <a href="https://www.linkedin.com/in/celina-ryan-870641168/">
                    LinkedIn
                  </a>
                </h3>
                <div class="centered-frame"></div>
              </div>
              <figure class="frame-image">
              <img src={headshot_img} alt="photo of me" />
              </figure>
            </div>
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
