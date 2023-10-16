import { h, Component } from "preact";
import "./home_styles.css";
import hawaiiTreesImgSrc from "../images/hawaii_trees.jpg";

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
      <div class="story-container">
        <div class="story-item">
          <img src="./images/maggiore.jpg" alt="Lake Maggiore" />
          <h2 class="story-text">
            <p>
              Welcome to my personal website. I'm Celina Ryan and I’m a Computer
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
              I'm currently a senior and graduating in May 2024. Following
              graduation, I hope to have a job because I like to eat and sleep
              with a roof over my head. So yeah, I'm looking for a job. Oh,
              what'd you say? What type of job am I looking for? Funny that you
              mention it actually...
            </p>
          </h2>
        </div>
        <div class="story-item">
          <img src="./images/geis.jpg" alt="Description of image 3" />
          <h2 class="story-text">
            <p>
              I'm looking for a full-time software development and/or
              engineering position. I hope to start my job by September 2024,
              and I'm not too picky where it is. I hope to end up either in the
              Washington D.C. area, Austin, Texas, California, New York City, or
              in Denver, Colorado. So that's my spiel. You're welcome to look
              around this site and learn more about me. If you'd like to chat
              about a potential position, please feel free to reach out.
            </p>
          </h2>
        </div>
        <div class="story-item">
          <img src="./images/amalfi_boat.jpg" alt="boat in amalfi" />
        </div>
      </div>
    );
  }
}
export default Home;
