import { h, Component } from "preact";
import crLogo from "../images/cr_logo_up.png";
import "./navbar_styles.css";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuActive: false,
      buttonActive: false
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
      buttonActive: !this.state.buttonActive
    });
  }

  render() {
    const mobileMenuClass = this.state.mobileMenuActive
      ? "nav-links active"
      : "nav-links";
    const buttonClass = this.state.buttonActive
      ? "toggle-button change"
      : "toggle-button";
    return (
      <div class="nav-container">
        <link rel="icon" href="../images/cr_logo_up_mini.png" type="image/png"></link>
        <div class="logo-cont">
          <a href="/" class="logo">
            <img src={crLogo} alt="celina logo" />
          </a>
        </div>
        <div class="menu-container">
          <ul class={mobileMenuClass}>
            <li class="nav-item">
              <a href="/" onClick={this.toggleMobileMenu}>
                home
              </a>
            </li>
            <li class="nav-item">
              <a href="/exp" onClick={this.toggleMobileMenu}>
                experience
              </a>
            </li>
            <li class="nav-item">
              <a href="/skills" onClick={this.toggleMobileMenu}>
                skills
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" onClick={this.toggleMobileMenu}>
                about
              </a>
            </li>
            <li class="nav-item">
              <a href="/contact" onClick={this.toggleMobileMenu}>
                contact me
              </a>
            </li>
          </ul>
        </div>
        <div class={buttonClass} onClick={this.toggleMobileMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    );
  }
}

export default NavBar;
