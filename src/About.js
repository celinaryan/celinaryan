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
      <div class="about">
        <div class="story-container">
          <div class="story-item">
            <img src={hotel_at_lake_img} alt="Lake Maggiore, from the hotel" />
            <h2 class="story-text">
              <p>
                Answering the classic question: "so tell me a little about
                yourself"... This page will tell you more about me, my goals,
                and why and how I made this website.
              </p>
            </h2>
          </div>
        </div>
        <div class="about-section-p1">
          <div class="quick-look-section">
            <div class="quick-look-bullets">
              <h3 class="quicklook-title">
                Education: University of Notre Dame
              </h3>
              <h3 class="quicklook-title">
                Major: Computer Science in the College of Engineering
              </h3>
              <h3 class="quicklook-title">
                Minor: Engineering Corporate Practice
              </h3>
              <h3 class="quicklook-title">Graduated: May 2024</h3>
              <div class="centered-frame"></div>
            </div>
            <figure class="frame-image">
              <img src={headshot_img} alt="my headshot" />
            </figure>
          </div>
          <div class="about-me-section">
            <h2 class="about-header">About Me</h2>
            <p>
              I live a fairly active lifestyle and love to learn. I
              enjoy just about any form of exercise: weight-lifting, yoga,
              running, swimming, and hiking. In addition to staying active I enjoy reading, 
              normally several books at a time. I’m also learning the guitar and the bass guitar. 
              I’m an avid dog lover; I have four dogs back home in Virginia. I’m a big fan of the 
              great outdoors, cooking, and coffee shops. So that’s what I keep myself busy with
              when I’m not busy with work.
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
             This website was made with a JavaScript library called Preact. During my Senior Fall (2023) semester, I took Modern Web Development, and I took advantage of new 
             content from this class and some extra office hours with my teacher to make the website 
             you see now. This past summer, I found that I really like iOS Development, and this past semester 
             I found that I really like Web Development, too. For this website I used Preact as opposed to 
             React because I liked how Preact is a bit closer to HTML-style code which I'm more familiar with. 
             </p>
            <br />
            <p>
            After working at Apple in Summer 2023, I found myself excited to learn more about their
            web development process. One of my roommates this summer was working on one of the apple.com teams and I was always curious about it. 
            If you look at the <a href="https://www.apple.com/airpods-pro/">Apple AirPods Pro Page</a> you'll find something that truly excited me about Apple -- not only do they make 
            great technology products, they utilize their mastery in technology (in this case, 
            their mastery of web development) to showcase their products. The scrolling images along with the expanding text
            on this website are inspired by what I've been intrigued by on the Apple website.
            </p>
            <br />
            <p>
              I wanted this website to be easy to navigate, to have
              aesthetically pleasing scrolling animations, and to be an accurate
              reflection of myself.{" "}
            </p>
          </div>
          <div class="about-career-section">
            <h2 class="about-header">About my Career</h2>
            <p>
              I chose a career in software engineering/development because of my passion for problem-solving and constant learning.
              I'm currently a Software Engineer at GEICO, specializing in both frontend and backend web development. I'm part of the Technology Development Program (TDP), 
              which I really enjoy because it allows me to take courses that enhance my skills and career while also collaborating with my dynamic, tech-driven team.
              <br />
            </p>
            <p>
            <br />As for past work experience, I’ve interned as a Data Scientist at CACI and as a Software
              Developer at Apple. Of these two disciplines, I found I really
              enjoy software development. Even at CACI my favorite aspect of my job was the more 
              software engineer aspect of Data Science--designing and optimizing solutions. 
              Then at Apple I had a great mentor and team
              that really helped me dig into the realm of Software Engineering
              and iOS Development.
              <br />
            </p>
            <p>
            <br />If you'd like to chat, please head 
              over to the <a href="/contact">Contact Me</a> section and reach out.
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
