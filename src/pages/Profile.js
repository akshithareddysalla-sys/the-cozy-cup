import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/_profile.scss";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // If there is no logged-in user
  if (!user) {
    return (
      <section className="profile-page">
        <div className="profile-container profile-login-message">

          <h1>Welcome to The Cozy Cup</h1>

          <p>
            Please sign in to view your profile and manage your account.
          </p>

          <button
            className="continue-shopping"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </button>
        </div>
      </section>
    );
  }

  const userName = user.name || "Coffee Lover";
  const userEmail = user.email || "No email available";

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <section className="profile-page">
      <div className="profile-container">

        {/* PAGE HEADING */}
        <div className="profile-title">
          <span>YOUR ACCOUNT</span>
          <h1>My Profile</h1>
          <p>
            Welcome back to The Cozy Cup. Manage your account and
            explore your coffee favorites.
          </p>
        </div>

        {/* PROFILE HEADER */}
        <div className="profile-header">

          {/* AVATAR */}
          <div className="profile-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          {/* USER INFORMATION */}
          <div className="profile-intro">
            <p className="welcome-text">Welcome back,</p>

            <h2>{userName}</h2>

            <p className="profile-email">
              {userEmail}
            </p>

            <span className="member-badge">
              Cozy Cup Member
            </span>
          </div>

        </div>

        {/* PROFILE CARDS */}
        <div className="profile-content">

          {/* ORDERS */}
          <div className="profile-card">
            <div className="profile-card-icon">
              ☕
            </div>

            <div className="profile-card-text">
              <h3>My Orders</h3>
              <p>
                View your previous orders and track your
                recent coffee purchases.
              </p>
            </div>

            <button
              className="profile-card-link"
              onClick={() => navigate("/cart")}
            >
              View →
            </button>
          </div>

          {/* FAVORITES */}
          <div className="profile-card">
            <div className="profile-card-icon">
              ♡
            </div>

            <div className="profile-card-text">
              <h3>Favorites</h3>
              <p>
                Keep your favorite coffee, desserts and
                drinks close at hand.
              </p>
            </div>

            <button
              className="profile-card-link"
              onClick={() => navigate("/favorites")}
            >
              Explore →
            </button>
          </div>

          {/* SAVED ADDRESSES */}
          <div className="profile-card">
            <div className="profile-card-icon">
              ⌖
            </div>

            <div className="profile-card-text">
              <h3>Saved Addresses</h3>
              <p>
                Manage your preferred delivery and
                pickup locations.
              </p>
            </div>

            <button
              className="profile-card-link"
              onClick={() => alert("Address management coming soon.")}
            >
              Manage →
            </button>
          </div>

          {/* ACCOUNT SETTINGS */}
          <div className="profile-card">
            <div className="profile-card-icon">
              ⚙
            </div>

            <div className="profile-card-text">
              <h3>Account Settings</h3>
              <p>
                Update your personal information and
                account preferences.
              </p>
            </div>

            <button
              onClick={() => navigate("/account-settings")}
              className="profile-card-link"
            >
              Settings →
            </button>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="profile-actions">

          <button
            className="continue-shopping"
            onClick={() => navigate("/menu")}
          >
            Continue Shopping
          </button>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Sign Out
          </button>

        </div>

      </div>
    </section>
  );
}

export default Profile;