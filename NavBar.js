import {
  html,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
// our header for our website
import { h } from "preact";
import { Link } from "preact-router";

function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  // CSS class for the mobile menu based on its state
  const mobileMenuClass = mobileMenuActive
    ? "mobile-nav-links active"
    : "mobile-nav-links";
  return html`
    <link href="navbar_styles.css" type="text/css" rel="stylesheet" />
    <div class="navbar-container">
      <a href="index.html" class="logo">
        <img src="images/cr_logo_up.png" alt="Celina Ryan" />
      </a>
      <nav class="navbar">
        <div class="menu-icon" onClick=${toggleMobileMenu}>
          <!-- Hamburger menu icon -->
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <ul class="nav-links">
        <Link activeClassName="active" href="/">home</Link>
        <Link activeClassName="active" href="/about">about</Link>
        </ul>
      </nav>
      <!-- Hidden navigation menu for smaller screens -->
      <ul class=${mobileMenuClass}>
      <Link activeClassName="active" href="/">home</Link>
      <Link activeClassName="active" href="/about">about</Link>
      </ul>
    </div>
  `;
}
export default NavBar;
