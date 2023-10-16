import { h, Component } from "preact";
import "./home_styles.css";
import "./about_styles.css";
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
      <div class="contact">
        <div class="story-container">
          <div class="story-item">
            <img src="./images/peacock.jpg" alt="peacock" />
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
                <img src="images/jpw_headshot_blue.jpg" alt="Photo of Me" />
              </figure>
            </div>
          </div>
          <div class="story-item">
            <img src="./images/sorrento.jpg" alt="a nice sunset" />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
