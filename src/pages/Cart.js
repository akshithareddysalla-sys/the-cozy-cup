import "../styles/_cart.scss";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc +
      parseFloat(item.price.replace("$", "")) *
        item.qty,
    0
  );

  return (
    <section className="cart-page">

      <h1>Your Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-card"
              key={item.id}
            >

              <img src={item.img} alt="" />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>{item.price}</p>

              </div>

              <div className="qty-controls">

                <button
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Total</h2>

          <h3>${total.toFixed(2)}</h3>

          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;