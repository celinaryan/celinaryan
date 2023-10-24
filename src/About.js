import { h, Component } from "preact";
import "./about_styles.css";
import "./home_styles.css";
import hotel_at_lake_img from "../images/hotel_at_lake.jpg";
import me_in_HI_img from "../images/me.jpg";
import headshot_img from "../images/jpw_headshot_blue.jpg";

class About extends Component {
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
      <div class="about">
        <div class="story-container">
          <div class="story-item">
            <img src={hotel_at_lake_img} alt="Lake Maggiore, from the hotel" />
            <h2 class="story-text">
              <p>
                Answering the classic question: "so tell me a little about
                yourself"... This page will tell you more about me, my goals,
                and why I made this website.
              </p>
            </h2>
          </div>
        </div>
        <div class="about-section">
          <div class="quick-look-section">
            <div class="quick-look-bullets">
              <h3 class="quicklook-title">
                <u>Celina Ryan</u>
              </h3>
              <h3 class="quicklook-title">
                Education: University of Notre Dame
              </h3>
              <h3 class="quicklook-title">
                Major: Computer Science in the College of Engineering
              </h3>
              <h3 class="quicklook-title">
                Minor: Engineering Corporate Practice
              </h3>
              <h3 class="quicklook-title">Expected Graduation: May 2024</h3>
              <div class="centered-frame"></div>
            </div>
            <figure class="frame-image">
              <img src={headshot_img} alt="my headshot" />
            </figure>
          </div>
          <div class="about-me-section">
            <h2 class="about-header">About Me</h2>
            <p>
              If I had to describe myself in one word, it’d probably be
              hyperactive. I live a fairly active lifestyle and love to learn. I
              enjoy just about any form of exercise: weight-lifting, yoga,
              running, swimming, and hiking. I like to read, too. I read a
              couple books at a time, just to keep myself in a constant rotation
              of learning and appreciating separate topics. I’m also learning
              the guitar and the bass because I love music and wanted to find a
              way to appreciate it beyond just listening. I’m also an avid dog
              lover; I have four dogs back home in Virginia, and I refer to my
              gaggle of dogs as my “pack.” I’m a big fan of the great outdoors,
              cooking, and coffee shops. So that’s what I keep myself busy with
              when I’m not busy with school!
            </p>
          </div>
          <div class="about-site-section">
            <h2 class="about-header">About this Website</h2>
            <p>
              It’s been a goal of mine to make a personal website for a while
              now. Resumes nowadays are fairly cookie-cutter. I wanted this
              website to be a showcase of all of my skills, past projects, and
              jobs. I also wanted to show potential employers a bit more of my
              personality as it’s hard to come across on a simple one page
              resume.
            </p>
            <br />
            <p>
              All of the photos on this website are taken by me—either taken on
              my phone or taken on a little digital camera that I bring around
              everywhere. I wanted this website to be easy to navigate, to have
              aesthetically pleasing scrolling animations, and to be an accurate
              reflection of myself.{" "}
            </p>
          </div>
          <div class="about-career-section">
            <h2 class="about-header">About my Career</h2>
            <p>
              I’ve interned as a Data Scientist at CACI and as a Software
              Developer at Apple. Of these two disciplines, I found I really
              enjoy software development. I had a great mentor and team at Apple
              that really helped me dig into the realm of Software Engineering
              and iOS Development. I really love problem-solving which is why I
              think I want to pursue software development/engineering for a
              full-time position.
              <br />
            </p>
            <p>
              <br />I graduate May 2024 and hope to start a full-time position
              by September 2024. I’m a US citizen so I don’t require
              sponsorship, and I’m willing to relocate. I’m not really picky
              where I end up, but I do have some preferences: Washington, D.C.
              area, Austin, Texas, California, New York City, or Denver,
              Colorado. If you think I’d be a good fit for your company, head on
              over to the “contact me” section and reach out.
            </p>
          </div>
        </div>
        <div class="story-item">
        <img src={me_in_HI_img} alt="me in hawaii" />
        </div>
      </div>
    );
  }
}
export default About;
