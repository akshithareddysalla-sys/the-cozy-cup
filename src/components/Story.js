import "../styles/_story.scss";
import storyImg from "../assets/media/images/story.jpg";
import { Link } from "react-router-dom";

function Story() {
  return (
    <section id="story" className="story-section">
      <div className="story-container">

        {/* IMAGE */}
        <div className="story-image">
          <img
            src={storyImg}
            alt="coffee story"
          />
        </div>

        {/* TEXT */}
        <div className="story-content">
          <h2>Our Story</h2>

          <p className="highlight">
            Brewed with passion, served with comfort.
          </p>

          <p>
            At The Cozy Cup, every cup tells a story. From carefully sourced beans
            to handcrafted brews, we create moments that feel like home.
          </p>

          <p>
            Whether it's your morning ritual or an evening escape, our coffee is
            designed to comfort, connect, and inspire.
          </p>

          <Link to="/about">
            <button className="btn btn-coffee">
              Explore More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Story;