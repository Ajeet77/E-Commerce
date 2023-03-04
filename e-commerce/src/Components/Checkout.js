import React from "react";
import StripCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";

const Checkout = ({ subTotal }) => {
  const tokenHandler = (token)=>{
    console.log("Order Place Successfully", token);
  }
  return (
    <>
      <StripCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MaCL2SE8PLLKeVCc9aNy4JhbkNLLI8YmVNJl4uXkHHu9ZL3Hqa6mFu5xL5At7dFLaiGQqemRJn1m056lVqiUjMa003YX4lO7s"
        currency="INR"
      >
        <Button variant="warning">Pay Now</Button>
      </StripCheckout>
    </>
  );
};

export default Checkout;
