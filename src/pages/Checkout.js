import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/_checkout.scss";

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [payment, setPayment] = useState("card");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(
      String(item.price).replace("$", "")
    );

    return total + price * item.qty;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    alert("Order placed successfully! ☕");

    navigate("/");
  };

  /* EMPTY CART */

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="checkout-empty">

          <div className="empty-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Add something delicious before checking out.
          </p>

          <button onClick={() => navigate("/menu")}>
            Explore Menu
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">

      <div className="checkout-container">

        {/* PAGE HEADER */}

        <div className="checkout-header">

          <button
            className="back-button"
            onClick={() => navigate("/cart")}
          >
            ← Back to Cart
          </button>

          <h1>
            Checkout <span>☕</span>
          </h1>

          <p>
            Almost there. Let's get your coffee ready.
          </p>

        </div>


        <div className="checkout-layout">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="checkout-left">

            {/* CUSTOMER DETAILS */}

            <div className="checkout-card">

              <div className="checkout-card-title">
                <span>01</span>

                <div>
                  <h2>Contact Information</h2>
                  <p>How can we reach you?</p>
                </div>
              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />

                </div>


                <div className="form-group full">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>

            </div>


            {/* DELIVERY ADDRESS */}

            <div className="checkout-card">

              <div className="checkout-card-title">

                <span>02</span>

                <div>
                  <h2>Delivery Address</h2>
                  <p>Where should we deliver your order?</p>
                </div>

              </div>


              <div className="form-grid">

                <div className="form-group full">

                  <label>Address</label>

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House number, street, area"
                    rows="3"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>PIN / ZIP Code</label>

                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="PIN code"
                    required
                  />

                </div>

              </div>

            </div>


            {/* PAYMENT */}

            <div className="checkout-card">

              <div className="checkout-card-title">

                <span>03</span>

                <div>
                  <h2>Payment Method</h2>
                  <p>Choose how you'd like to pay</p>
                </div>

              </div>


              <div className="payment-options">

                <label
                  className={
                    payment === "card"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={payment === "card"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <div>
                    <strong>💳 Card</strong>
                    <small>Credit / Debit Card</small>
                  </div>

                </label>


                <label
                  className={
                    payment === "upi"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={payment === "upi"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <div>
                    <strong>📱 UPI</strong>
                    <small>Google Pay / PhonePe / UPI</small>
                  </div>

                </label>


                <label
                  className={
                    payment === "cash"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={payment === "cash"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <div>
                    <strong>💵 Cash</strong>
                    <small>Pay when your order arrives</small>
                  </div>

                </label>

              </div>

            </div>

          </div>


          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="checkout-right">

            <div className="order-summary">

              <h2>Your Order</h2>

              <p className="summary-count">
                {cart.length} item
                {cart.length !== 1 ? "s" : ""}
              </p>


              {/* ITEMS */}

              <div className="summary-items">

                {cart.map((item, index) => {

                  const price = parseFloat(
                    String(item.price).replace("$", "")
                  );

                  const itemTotal =
                    price * item.qty;

                  return (
                    <div
                      className="summary-item"
                      key={`${item.id}-${index}`}
                    >

                      <img
                        src={item.img}
                        alt={item.name}
                      />

                      <div className="summary-item-info">

                        <h3>{item.name}</h3>

                        <p>
                          Qty: {item.qty}
                        </p>

                      </div>

                      <strong>
                        ${itemTotal.toFixed(2)}
                      </strong>

                    </div>
                  );

                })}

              </div>


              {/* TOTALS */}

              <div className="summary-totals">

                <div>
                  <span>Subtotal</span>
                  <strong>
                    ${subtotal.toFixed(2)}
                  </strong>
                </div>

                <div>
                  <span>Delivery</span>
                  <strong>
                    ${deliveryFee.toFixed(2)}
                  </strong>
                </div>

                <div className="total-row">
                  <span>Total</span>
                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>

              </div>


              <button
                className="place-order-btn"
                onClick={handleSubmit}
              >
                Place Order
                <span>→</span>
              </button>


              <p className="secure-text">
                🔒 Secure checkout
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;