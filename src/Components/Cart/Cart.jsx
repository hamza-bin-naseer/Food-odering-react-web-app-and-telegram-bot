import React from "react";
import "./Cart.css";
import Button from "../Button/Button";

function Cart({ cartItems,onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br />
      <span>Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={cartItems.length === 0 ? "Order !" : "Checkout"}
        type="checkout"
        disabled={cartItems.length === 0} // Fixed 'disable' to 'disabled'
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
