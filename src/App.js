import React, { useState } from "react";
import Header from "./Compomnents/LAYOUT/header";
import "./App.css";
import Meals from "./Compomnents/MEALS/meals";
import Cart from "./Compomnents/CART/cart";
import CartProvider from "./Store/cartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart Close={hideCartHandler} />}
      <Header onAct={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
