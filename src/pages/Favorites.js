import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import "../styles/_favorites.scss";

function Favorites() {
  const {
    favorites,
    removeFavorite,
    clearFavorites,
  } = useFavorites();

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      qty: 1,
      size: "M",
      temperature: "Hot",
      milk: "Regular",
      sugar: "Normal",
      type: item.category === "desserts" ? "desserts" : "coffee",
    });

    navigate("/cart");
  };

  return (
    <section className="favorites-page">

      <div className="favorites-container">

        {/* HEADER */}

        <div className="favorites-header">

          <div>
            <span className="favorites-eyebrow">
              YOUR COFFEE COLLECTION
            </span>

            <h1>
              My <span>Favorites</span>
            </h1>

            <p>
              The drinks and treats you love, all in one place.
            </p>
          </div>

          {favorites.length > 0 && (
            <button
              className="clear-favorites"
              onClick={clearFavorites}
            >
              Clear All
            </button>
          )}

        </div>


        {/* EMPTY STATE */}

        {favorites.length === 0 ? (

          <div className="favorites-empty">

            <div className="empty-heart">
              ♡
            </div>

            <h2>
              Nothing here yet
            </h2>

            <p>
              Your favorite coffees and treats will appear here.
              Start exploring our menu and save the ones you love.
            </p>

            <Link
              to="/menu"
              className="browse-menu-button"
            >
              Explore Menu
            </Link>

          </div>

        ) : (

          /* FAVORITES GRID */

          <div className="favorites-grid">

            {favorites.map((item) => (

              <article
                className="favorite-card"
                key={item.id}
              >

                {/* IMAGE */}

                <div className="favorite-image">

                  <Link to={`/menu/${item.id}`}>

                    <img
                      src={item.img}
                      alt={item.name}
                    />

                  </Link>

                  <button
                    className="remove-favorite"
                    onClick={() => removeFavorite(item.id)}
                    aria-label={`Remove ${item.name} from favorites`}
                  >
                    ♥
                  </button>

                </div>


                {/* INFORMATION */}

                <div className="favorite-info">

                  <div className="favorite-top">

                    <div>

                      <span className="favorite-category">
                        {item.category}
                      </span>

                      <h2>
                        {item.name}
                      </h2>

                    </div>

                    <span className="favorite-price">
                      {item.price}
                    </span>

                  </div>


                  {/* RATING */}

                  <div className="favorite-rating">
                    <span>★</span>

                    {item.ratings || "4.8"}

                  </div>


                  {/* DESCRIPTION */}

                  <p className="favorite-description">
                    {item.description}
                  </p>


                  {/* ACTIONS */}

                  <div className="favorite-actions">

                    <Link
                      to={`/menu/${item.id}`}
                      className="view-favorite"
                    >
                      View Details
                    </Link>

                    <button
                      className="add-favorite-cart"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}


        {/* BOTTOM CTA */}

        {favorites.length > 0 && (

          <div className="favorites-bottom">

            <p>
              Looking for something new?
            </p>

            <Link to="/menu">
              Explore More Drinks →
            </Link>

          </div>

        )}

      </div>

    </section>
  );
}

export default Favorites;