import "../styles/_gallery.scss";
import galleryImg1 from "../assets/media/images/gallery1.jpg";
import galleryImg2 from "../assets/media/images/gallery2.jpg";
import galleryImg3 from "../assets/media/images/gallery3.jpg";
import galleryImg4 from "../assets/media/images/gallery4.jpg";
import galleryImg5 from "../assets/media/images/gallery5.jpg";
import galleryImg6 from "../assets/media/images/gallery6.jpg";

const images = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Our Coffee Moments</h2>
      <p className="gallery-subtitle">
        Every cup tells a story. Share your cozy moments with us using #TheCozyCup.
      </p>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt="coffee" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;