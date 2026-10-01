import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import "../styles/_details.scss";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Details() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const item = menuData.find((i) => i.id === id);

  const [qty, setQty] = useState(1);

  const [size, setSize] = useState("M");
  const [temperature, setTemperature] = useState("Hot");
  const [milk, setMilk] = useState("Regular");
  const [sugar, setSugar] = useState("Normal");

  const [portion, setPortion] = useState("Regular");
  const [toppings, setToppings] = useState([]);
  const [serve, setServe] = useState("Warm");

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const isDessert = item.category === "desserts";

  const toggleTopping = (topping) => {

    setToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const price = parseFloat(item.price.replace("$", ""));
  const total = (price * qty).toFixed(2);

  return (
    <section className="details-page">

      <div className="details-container">

        <div className="details-image">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="details-info">

          <h1>{item.name}</h1>

          <p className="desc">
            {item.description}
          </p>

          {/* QTY */}
          <div className="qty-box">

            <button
              onClick={() =>
                setQty(qty > 1 ? qty - 1 : 1)
              }
            >
              -
            </button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>

          </div>

          <div className="price-box">

            <h3>${total}</h3>

            <button
              onClick={() => {

                if (isDessert) {

                  addToCart({
                    ...item,
                    qty,
                    portion,
                    toppings,
                    serve,
                    type: "desserts"
                  });

                } else {

                  addToCart({
                    ...item,
                    qty,
                    size,
                    temperature,
                    milk,
                    sugar,
                    type: "coffee"
                  });
                }

                navigate("/cart");
              }}
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Details;