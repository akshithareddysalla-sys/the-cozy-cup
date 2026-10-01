import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  /* ADD TO CART */
  const addToCart = (item) => {

    setCart((prev) => {

      const existing = prev.find((i) => {

        // DESSERT MATCH
        if (item.type === "desserts") {

          return (
            i.id === item.id &&
            i.portion === item.portion &&
            JSON.stringify(i.toppings) === JSON.stringify(item.toppings) &&
            i.serve === item.serve
          );
        }

        // COFFEE MATCH
        return (
          i.id === item.id &&
          i.size === item.size &&
          i.temperature === item.temperature &&
          i.milk === item.milk &&
          i.sugar === item.sugar
        );
      });

      // UPDATE QTY
      if (existing) {

        return prev.map((i) =>
          i === existing
            ? {
                ...i,
                qty: i.qty + (item.qty || 1)
              }
            : i
        );
      }

      // NEW ITEM
      return [
        ...prev,
        {
          ...item,
          qty: item.qty || 1
        }
      ];
    });
  };

  /* INCREASE */
  const increaseQty = (id) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /* DECREASE */
  const decreaseQty = (id) => {

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* REMOVE */
  const removeFromCart = (id) => {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);