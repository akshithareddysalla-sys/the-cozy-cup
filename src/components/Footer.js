import "../styles/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* ABOUT */}
        <div className="footer-column">
          <h5>About Us</h5>

          <Link to="/about">Our Company</Link>
          <Link to="/about">Our Coffee</Link>
          <Link to="/about">Stories</Link>
        </div>


        {/* EXPLORE */}
        <div className="footer-column">
          <h5>Explore</h5>

          <Link to="/menu">Seasonal Flavors</Link>
          <Link to="/menu">New Arrivals</Link>
          <Link to="/menu">Bestsellers</Link>
        </div>


        {/* SERVICES */}
        <div className="footer-column">
          <h5>Services</h5>

          <Link to="/menu">Online Orders</Link>
          <Link to="/menu">Custom Brews</Link>
          <Link to="/menu">Gift Cards</Link>
        </div>


        {/* CONTACT */}
        <div className="footer-column">
          <h5>Contact</h5>

          <Link to="/location">Help Center</Link>
          <Link to="/location">Customer Care</Link>
          <Link to="/location">Support</Link>
        </div>

      </div>


      {/* DIVIDER */}
      <hr />


      {/* SOCIAL + COPYRIGHT */}
      <div className="footer-center">

        {/* SOCIAL */}
        <div className="footer-social">

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

        </div>


        {/* FOOTER LINKS */}
        <div className="footer-bottom-links">

          <button type="button">
            Privacy Policy
          </button>

          <button type="button">
            Terms of Use
          </button>

          <button type="button">
            Cookie Preferences
          </button>

        </div>


        {/* COPYRIGHT */}
        <p className="copyright">
          © 2026 The Cozy Cup Company. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;