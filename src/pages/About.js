import "../styles/_about.scss";
import aboutImg from "../assets/media/images/about.jpg";
import ChefImg1 from "../assets/media/images/chef1.jpg";
import ChefImg2 from "../assets/media/images/chef2.jpg";
import ChefImg3 from "../assets/media/images/chef3.jpg";
import CoffeeVideo from "../assets/media/videos/coffee-video.mp4";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">

        <div className="about-overlay">

          <h1>About The Cozy Cup</h1>

          <p>
            Brewing warmth, comfort, and unforgettable coffee moments.
          </p>

        </div>

      </div>

      {/* STORY */}
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="coffee shop" />
        </div>

        <div className="about-content">

          <h2>Our Story</h2>

          <span className="line"></span>

            <p>
              The Cozy Cup started as a small dream shared between coffee lovers
              who believed a café should be more than just a place to grab a drink.
              We wanted to create a warm and welcoming space where every sip feels
              comforting and every visit feels memorable.
            </p>

            <p>
              Inspired by the aroma of freshly brewed coffee and the peaceful feeling
              of cozy conversations, we began crafting beverages using carefully
              selected beans sourced from trusted farms around the world.
              Every cup is prepared with attention, passion, and creativity.
            </p>

            <p>
              From handcrafted espresso drinks to rich desserts baked fresh every day,
              our menu is designed to bring people together and create moments worth
              sharing. Whether you're working, relaxing, or meeting friends,
              The Cozy Cup is your perfect coffee escape.
            </p>

            <p>
              Over time, our café became more than just a coffee shop —
              it became a community built around warmth, connection, and
              unforgettable flavors. We continue to innovate while staying true
              to our roots: serving quality coffee with genuine hospitality.
            </p>

            <p>
              At The Cozy Cup, we believe every cup tells a story —
              a story of comfort, craftsmanship, and togetherness.
              And we’re excited to share that story with you every single day.
            </p>

          <Link to="/menu">
            <button>Explore Menu</button>
          </Link>

        </div>

      </div>

      {/* FEATURES */}
      <div className="about-features">

        <div className="feature-card">
          <h3>Premium Beans</h3>
          <p>Freshly sourced coffee beans from trusted farms.</p>
        </div>

        <div className="feature-card">
          <h3>Handcrafted Drinks</h3>
          <p>Made with love by passionate baristas every day.</p>
        </div>

        <div className="feature-card">
          <h3>Cozy Ambience</h3>
          <p>A relaxing space designed for comfort and connection.</p>
        </div>

      </div>

      {/* TEAM SECTION */}
        <div className="team-section">

        <div className="team-header">
            <h2>Meet Our Team</h2>
            <p>
            Passionate baristas and coffee lovers dedicated to crafting
            the perfect experience for every customer.
            </p>
        </div>

        <div className="team-grid">

            {/* MEMBER 1 */}
            <div className="team-card">
            <img
                src={ChefImg1}
                alt="Chef Emma Watson"
            />

            <h4>Emma Watson</h4>
            <span>Head Barista</span>

            <p>
                Expert in handcrafted espresso blends and latte art.
            </p>
            </div>

            {/* MEMBER 2 */}
            <div className="team-card">
            <img
                src={ChefImg2}
                alt="Chef Daniel James"
            />

            <h4>Daniel James</h4>
            <span>Coffee Roaster</span>

            <p>
                Carefully selects and roasts premium beans with precision.
            </p>
            </div>

            {/* MEMBER 3 */}
            <div className="team-card">
            <img
                src={ChefImg3}
                alt="Chef Sophia Lee"
            />

            <h4>Sophia Lee</h4>
            <span>Pastry Chef</span>

            <p>
                Creates delicious desserts that perfectly pair with coffee.
            </p>
            </div>

        </div>

        </div>

        {/* VIDEO BANNER */}
        <div className="video-banner">

        <video
            autoPlay
            muted
            loop
            playsInline
        >
            <source
            src={CoffeeVideo}
            type="video/mp4"
            />
        </video>

        <div className="video-overlay">

            <h2>Crafted With Passion</h2>

            <p>
            Every cup tells a story of warmth, aroma, and comfort.
            </p>

        </div>

        </div>

    </section>
  );
}

export default About;