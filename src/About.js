import { h, Component } from "preact";
import "./about_styles.css";
import "./home_styles.css";
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
      <div class="about">
        <div class="story-container">
          <div class="story-item">
            <img src="./images/dc_cherry_blossoms.jpg" alt="Lake Maggiore" />
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
              <img src="images/jpw_headshot_blue.jpg" alt="Photo of Me" />
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
          <img src="./images/me.jpg" alt="me in hawaii" />
        </div>
      </div>
    );
  }
}
export default About;
