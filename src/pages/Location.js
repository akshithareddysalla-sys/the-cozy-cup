import "../styles/_location.scss";

function Location() {
  return (
    <section className="location-page">

      {/* HERO */}
      <div className="location-hero">

        <h1>Find Your Cozy Corner</h1>

        <p>
          Visit The Cozy Cup and enjoy handcrafted coffee,
          cozy vibes, and unforgettable moments.
        </p>

      </div>

      {/* MAP */}
      <div className="map-section">

        <iframe 
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860240.35630318!2d-145.73770356026122!3d14.116850872757944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf10042628dbf%3A0x4172cbb77897696c!2sCozy%20Cup!5e0!3m2!1sen!2sin!4v1779437783409!5m2!1sen!2sin" 
          width="600" 
          height="450"
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

      {/* STORE CARDS */}
      <div className="stores-section">

        <div className="section-header">
          <h2>Our Locations</h2>

          <p>
            Discover your nearest Cozy Cup café and enjoy
            premium coffee experiences everywhere.
          </p>
        </div>

        <div className="store-grid">

          {/* STORE 1 */}
          <div className="store-card">

            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
              alt=""
            />

            <div className="store-content">

              <h3>The Cozy Cup</h3>

              <p>
                25 Madison Avenue, New York, NY
              </p>

              <span>Open Daily</span>

              <h4>7:00 AM - 10:00 PM</h4>

              <button>Get Directions</button>

            </div>

          </div>

          {/* STORE 2 */}
          <div className="store-card">

            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
              alt=""
            />

            <div className="store-content">

              <h3>The Cozy Cup</h3>

              <p>
                12 Bedford Street, Brooklyn, NY
              </p>

              <span>Open Daily</span>

              <h4>8:00 AM - 11:00 PM</h4>

              <button>Get Directions</button>

            </div>

          </div>

          {/* STORE 3 */}
          <div className="store-card">

            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt=""
            />

            <div className="store-content">

              <h3>The Cozy Cup</h3>

              <p>
                8 Central Park West, New York
              </p>

              <span>Open Daily</span>

              <h4>6:30 AM - 9:30 PM</h4>

              <button>Get Directions</button>

            </div>

          </div>

        </div>

      </div>

      {/* OPENING HOURS */}
      <div className="hours-section">

        <div className="hours-box">

          <h2>Opening Hours</h2>

          <div className="hours-row">
            <span>Monday - Friday</span>
            <span>7:00 AM - 10:00 PM</span>
          </div>

          <div className="hours-row">
            <span>Saturday</span>
            <span>8:00 AM - 11:00 PM</span>
          </div>

          <div className="hours-row">
            <span>Sunday</span>
            <span>8:00 AM - 9:00 PM</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Location;