import { useState, useEffect } from "react";
import "../styles/_menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import americano from "../assets/media/images/americano.jpg";
import mocha from "../assets/media/images/mocha.jpg";
import latte from "../assets/media/images/latte.jpg";
import amaretto from "../assets/media/images/amaretto.jpg";
import espresso from "../assets/media/images/espresso.jpg";
import cappuccino from "../assets/media/images/cappuccino.png";
import caramel from "../assets/media/images/caramel.jpg";
import vanilla from "../assets/media/images/vanilla.jpg";
import iced from "../assets/media/images/iced.jpg";

const original = [
  { name: "Americano", price: "$5.20", img: americano },
  { name: "Mocha", price: "$6.20", img: mocha },
  { name: "Latte", price: "$6.20", img: latte },
  { name: "Amaretto", price: "$5.80", img: amaretto },
  { name: "Espresso", price: "$4.50", img: espresso },
  { name: "Cappuccino", price: "$6.00", img: cappuccino },
  { name: "Caramel Latte", price: "$6.50", img: caramel },
  { name: "Vanilla Latte", price: "$6.50", img: vanilla },
  { name: "Iced Coffee", price: "$5.00", img: iced }
];

// clones for infinite loop
const items = [
  ...original.slice(-3),
  ...original,
  ...original.slice(0, 3)
];

function Menu() {
  const [current, setCurrent] = useState(3);
  const [transition, setTransition] = useState(true);
  const isMobile = window.innerWidth < 768;

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const total = items.length;

    if (current === total - 3) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(3);
      }, 600);
    }

    if (current === 2) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(total - 4);
      }, 600);
    }
  }, [current]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <section id="menu" className="menu-section">
      <h2>Today's Special</h2>

      <div className="carousel">

        <button className="nav left" onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${current * (isMobile ? 90 : 33.333)}%)`,
              transition: transition ? "transform 0.6s ease-in-out" : "none"
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`menu-card ${
                  i === (isMobile ? (current) : (current + 1) % items.length) ? "active" : ""
                }`}
              >
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button>ORDER</button>
              </div>
            ))}
          </div>
        </div>

        <button className="nav right" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

      </div>
    </section>
  );
}

export default Menu;