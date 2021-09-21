import React from "react";
import "./Cart.css";
import logo from "./../images/user-1.png";

const Cart = (props) => {
  return (
    <div>
      <div className="Cart">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae, harum.
        </p>
        <h1>Name: {props.name.slice(0, 20)}</h1>
        <h3>Username: {props.username}</h3>
        <h4>Email: {props.email}</h4>
      </div>
    </div>
  );
};

export default Cart;
