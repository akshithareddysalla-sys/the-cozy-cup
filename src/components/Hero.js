import "../styles/_hero.scss";
import heroImg from "../assets/media/images/hero.png";
import { Link } from "react-router-dom";

function Hero() {

  return (
    <section id="home" className="hero container-fluid">
      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-6 hero-left" data-aos="fade-right">
          <h1>
            Experience Coffee <br />
            That Feels Like <br />
            Home
          </h1>

          <p>
            Experience rich, handcrafted coffee made to awaken your senses 
            and elevate every moment.
          </p>

          <div className="hero-buttons">
            <Link to="/menu">
              <button className="btn btn-coffee">
                Order Now
              </button>
            </Link>

            <Link to="/about">
              <button className="btn btn-explore">
                Explore More
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-6 hero-right text-center" data-aos="fade-left">
          <img src={heroImg} alt="coffee" />
        </div>

      </div>
    </section>
  );
}

export default Hero;