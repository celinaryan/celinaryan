import { h, Component } from "preact";
import crLogo from "../images/cr_logo_up.png";
import "./navbar_styles.css";
import "./button_styles.css";

class Footer extends Component {
  // Handler for 'Scroll to Top' button
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <footer>
        <div className="navbar-container">
          <div class="logo-cont">
            <a href="/" class="logo">
              <img src={crLogo} alt="celina logo" />
            </a>
          </div>
          <div className="frame">
            <button className="button-style" onClick={this.scrollToTop}>
              scroll to top
            </button>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
