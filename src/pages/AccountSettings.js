import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/_accountSettings.scss";

function AccountSettings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const [notifications, setNotifications] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
    };

    localStorage.setItem(
      "cozyCupUser",
      JSON.stringify(updatedUser)
    );

    alert("Account settings saved successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <section className="account-settings-page">

      <div className="account-settings-container">

        {/* HEADER */}

        <div className="settings-header">

          <button
            className="back-btn"
            onClick={() => navigate("/profile")}
          >
            ← Back to Profile
          </button>

          <h1>
            Account <span>Settings</span>
          </h1>

          <p>
            Manage your personal information and preferences.
          </p>

        </div>


        {/* PROFILE INFORMATION */}

        <form
          className="settings-card"
          onSubmit={handleSave}
        >

          <div className="card-heading">

            <div>
              <h2>Profile Information</h2>
              <p>Update your personal details</p>
            </div>
          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />

            </div>


            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />

            </div>

          </div>


          <button
            type="submit"
            className="save-btn"
          >
            Save Changes
          </button>

        </form>


        {/* SECURITY */}

        <div className="settings-card">

          <div className="card-heading">

            <div>
              <h2>Security</h2>
              <p>Keep your account secure</p>
            </div>

          </div>


          <div className="setting-row">

            <div>
              <h3>Password</h3>
              <p>Change your account password</p>
            </div>

            <button
              className="outline-btn"
              onClick={() =>
                alert("Password change feature coming soon.")
              }
            >
              Change Password
            </button>

          </div>

        </div>


        {/* NOTIFICATIONS */}

        <div className="settings-card">

          <div className="card-heading">

            <div>
              <h2>Notifications</h2>
              <p>Choose what you want to receive</p>
            </div>

          </div>


          <div className="setting-row">

            <div>
              <h3>Promotional Notifications</h3>
              <p>
                Receive offers, new menu items and promotions
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />

              <span></span>

            </label>

          </div>


          <div className="setting-row">

            <div>
              <h3>Order Updates</h3>
              <p>
                Get notifications about your orders
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={orderUpdates}
                onChange={() =>
                  setOrderUpdates(!orderUpdates)
                }
              />

              <span></span>

            </label>

          </div>

        </div>


        {/* ACCOUNT */}

        <div className="settings-card danger-card">

          <div className="card-heading">

            <div className="heading-icon">
              ⚙
            </div>

            <div>
              <h2>Account</h2>
              <p>Manage your Cozy Cup account</p>
            </div>

          </div>


          <div className="setting-row">

            <div>
              <h3>Sign Out</h3>
              <p>
                Sign out from this device
              </p>
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Sign Out
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AccountSettings;