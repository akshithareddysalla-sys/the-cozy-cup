import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Details from "./pages/Details";
import About from "./pages/About";
import Location from "./pages/Location";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import AccountSettings from "./pages/AccountSettings";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <FavoritesProvider>
          <CartProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>

          </CartProvider>
        </FavoritesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;