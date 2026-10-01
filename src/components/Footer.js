import "../styles/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-column">
          <h5>About Us</h5>
          <a href="#">Our Company</a>
          <a href="#">Our Coffee</a>
          <a href="#">Stories</a>
        </div>

        <div className="footer-column">
          <h5>Explore</h5>
          <a href="#">Seasonal Flavors</a>
          <a href="#">New Arrivals</a>
          <a href="#">Bestsellers</a>
        </div>

        <div className="footer-column">
          <h5>Services</h5>
          <a href="#">Online Orders</a>
          <a href="#">Custom Brews</a>
          <a href="#">Gift Cards</a>
        </div>

        <div className="footer-column">
          <h5>Contact</h5>
          <a href="#">Help Center</a>
          <a href="#">Customer Care</a>
          <a href="#">Support</a>
        </div>

      </div>

      {/* DIVIDER */}
      <hr />

      {/* SOCIAL + COPYRIGHT CENTERED */}
      <div className="footer-center">

        <div className="footer-social">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Preferences</a>
        </div>

        <p className="copyright">
          © 2026 The Cozy Cup Company. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;