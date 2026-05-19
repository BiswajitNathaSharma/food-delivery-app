import React, { createContext, useCallback, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartRestaurantId, setCartRestaurantId] = useState(null);

  // Add item – enforces single-restaurant cart
  const addToCart = useCallback((item, restaurantId, restaurantName) => {
    // If cart has items from a different restaurant, clear first
    setCartItems((prev) => {
      if (cartRestaurantId && cartRestaurantId !== restaurantId) {
        // Different restaurant – reset cart
        setCartRestaurantId(restaurantId);
        return [{ ...item, quantity: 1, restaurantId, restaurantName }];
      }

      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      setCartRestaurantId(restaurantId);
      return [...prev, { ...item, quantity: 1, restaurantId, restaurantName }];
    });
  }, [cartRestaurantId]);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      const updated = prev
        .map((ci) => (ci.id === itemId ? { ...ci, quantity: ci.quantity - 1 } : ci))
        .filter((ci) => ci.quantity > 0);
      if (updated.length === 0) setCartRestaurantId(null);
      return updated;
    });
  }, []);

  const deleteFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      const updated = prev.filter((ci) => ci.id !== itemId);
      if (updated.length === 0) setCartRestaurantId(null);
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setCartRestaurantId(null);
  }, []);

  const getItemQuantity = useCallback(
    (itemId) => {
      const found = cartItems.find((ci) => ci.id === itemId);
      return found ? found.quantity : 0;
    },
    [cartItems]
  );

  const totalItems = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = cartItems.reduce((sum, ci) => sum + ci.price * ci.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 2.49 : 0;
  const taxes = subtotal * 0.1;
  const total = subtotal + deliveryFee + taxes;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartRestaurantId,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        getItemQuantity,
        totalItems,
        subtotal,
        deliveryFee,
        taxes,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
