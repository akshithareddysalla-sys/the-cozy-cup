import "../styles/_menuPage.scss";
import menuData from "../data/menuData";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MenuPage() {
  const [selected, setSelected] = useState(menuData[0] || {});
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState("M");
  const [temperature, setTemperature] = useState("Hot");
  const [milk, setMilk] = useState("Regular");
  const [sugar, setSugar] = useState("Normal");

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty
  } = useCart();

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const filtered = menuData.filter((item) => {
    return (
      (category === "all" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuData.length > 0) {
      setSelected(menuData[0]);
    }
  }, []);

  if (isMobile) {
    return (
      <section className="menu-mobile">

        {/* HEADER */}
        <div className="menu-header">
          <h2>
            Best Coffee, Just <span>For You</span>
          </h2>

          <input
            type="text"
            placeholder="Search coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABS */}
        <div className="menu-tabs">
          {["all", "coffee", "cold", "desserts"].map((cat) => (
            <span
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* GRID */}
        <div className="menu-grid">
          {filtered.map((item) => (
            <Link
              to={`/menu/${item.id}`}
              className="menu-link"
              key={item.id}
            >
              <div
                className={`coffee-card ${
                  selected && selected.id === item.id ? "active" : ""
                }`}
                onClick={() => setSelected(item)}
              >
              <div className="menu-image-wrapper">

                <img
                  src={item.img}
                  alt={item.name}
                />

                <button
                  className={`favorite-button ${
                    isFavorite(item.id) ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    toggleFavorite(item);
                  }}
                  aria-label={
                    isFavorite(item.id)
                      ? `Remove ${item.name} from favorites`
                      : `Add ${item.name} to favorites`
                  }
                >
                  {isFavorite(item.id) ? "♥" : "♡"}
                </button>

              </div>

              <h5>{item.name}</h5>

              <div className="card-bottom">

                <span>{item.price}</span>

                {(() => {

                  const cartItem = cart.find((c) => c.id === item.id);

                  return cartItem ? (

                    <div
                      className="qty-controls"
                      onClick={(e) => e.stopPropagation()}
                    >

                      <button
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>

                      <span>{cartItem.qty}</span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  ) : (

                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        addToCart({
                          ...item,
                          qty: 1,
                          size,
                          temperature,
                          milk,
                          sugar
                        });
                      }}
                    >
                      +
                    </button>

                  );

                })()}

              </div>
            </div>
          </Link>
          ))}
        </div>

      </section>
    );
  }
  return (
    <section className="menu-desktop">

      <div className="menu-layout">

        {/* LEFT SIDE */}
        <div className="menu-left">

          <h2>
            We Make <span>Best Coffee</span> For You
          </h2>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search your favorite coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* TABS */}
          <div className="menu-tabs">
            <span
              className={category === "all" ? "active" : ""}
              onClick={() => setCategory("all")}
            >
              All
            </span>
            <span
              className={category === "coffee" ? "active" : ""}
              onClick={() => setCategory("coffee")}
            >
              Coffee
            </span>
            <span
              className={category === "cold" ? "active" : ""}
              onClick={() => setCategory("cold")}
            >
              Cold
            </span>
            <span
              className={category === "desserts" ? "active" : ""}
              onClick={() => setCategory("desserts")}
            >
              Desserts
            </span>
          </div>

          {/* GRID */}
          <div className="menu-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`coffee-card ${
                  selected && selected.id === item.id ? "active" : ""
                }`}
                onClick={() => setSelected(item)}
              >

                <div className="rating">⭐ {item.ratings}</div>

                <div className="menu-image-wrapper">

                  <img
                    src={item.img}
                    alt={item.name}
                  />

                  <button
                    className={`favorite-button ${
                      isFavorite(item.id) ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item);
                    }}
                  >
                    {isFavorite(item.id) ? "♥" : "♡"}
                  </button>

                </div>

                <h5>{item.name}</h5>
                <p className="sub">{item.category}</p>

                <div className="card-bottom">
                  <span>{item.price}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE (DYNAMIC PREVIEW) */}
        <div className="menu-right">

          {selected && (
            <>
              <div className="preview-image-wrapper">

                <img
                  src={selected.img}
                  alt={selected.name}
                />

                <button
                  className={`preview-favorite ${
                    isFavorite(selected.id) ? "active" : ""
                  }`}
                  onClick={() => toggleFavorite(selected)}
                >
                  {isFavorite(selected.id) ? "♥" : "♡"}
                </button>

              </div>

              <h3>{selected.name}</h3>

              <p>{selected.description}</p>

              <div className="ingredients">
                {selected.ingredients.map((ing, i) => (
                  <span key={i}>{ing}</span>
                ))}
              </div>

              {/* CUP SIZE */}
              <div className="option-group">
                <h5>Cup Size</h5>
                <div className="options">
                  {["S", "M", "L"].map((s) => (
                    <span
                      key={s}
                      className={size === s ? "active" : ""}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* TEMPERATURE */}
              <div className="option-group">
                <h5>Temperature</h5>
                <div className="options">
                  {["Hot", "Warm", "Cold"].map((t) => (
                    <span
                      key={t}
                      className={temperature === t ? "active" : ""}
                      onClick={() => setTemperature(t)}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* MILK TYPE */}
              <div className="option-group">
                <h5>Milk Type</h5>
                <div className="options">
                  {["Regular", "Almond", "Oat", "Soy"].map((m) => (
                    <span
                      key={m}
                      className={milk === m ? "active" : ""}
                      onClick={() => setMilk(m)}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <h5>Sugar Level</h5>
                <div className="options">
                  {["No Sugar", "Less", "Normal", "Extra"].map((s) => (
                    <span
                      key={s}
                      className={sugar === s ? "active" : ""}
                      onClick={() => setSugar(s)}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="price-box">
                <span>{selected.price}</span>

                <button onClick={() => addToCart(selected)}>
                  Add to Cart
                </button>
              </div>
            </>
          )}

        </div>

      </div>

    </section>
  );
}

export default MenuPage;