import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/_auth.scss";

function Auth() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (isSignUp && formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const user = {
    name: isSignUp ? formData.name : "Coffee Lover",
    email: formData.email
  };

  login(user);

  navigate("/profile");
};

  return (
    <section className="auth-page">

      {/* LEFT SIDE */}
      <div className="auth-image">
        <div className="auth-overlay">
          <h1>The Cozy Cup</h1>
          <p>Your favorite coffee, your cozy moments.</p>
          <span>Brew. Relax. Repeat.</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-form-section">
        <div className="auth-form">

          <Link to="/" className="auth-logo">
            The Cozy Cup
          </Link>

          <h2>
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>

          <p className="auth-subtitle">
            {isSignUp
              ? "Join us and make every coffee moment special."
              : "Sign in to continue your cozy coffee journey."}
          </p>

          <form onSubmit={handleSubmit}>

            {isSignUp && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {isSignUp && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {!isSignUp && (
              <div className="forgot-password">
                <a href="#forgot">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="auth-button">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>

          </form>

          <div className="auth-switch">
            <span>
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Auth;