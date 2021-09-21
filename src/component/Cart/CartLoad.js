import React, { useEffect, useState } from "react";
import "./Cart.css";
import Cart from "./Cart";

const CartLoad = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="cartContainer">
      <h1>
        Happy <span>Clients says</span>
      </h1>
      <div className="Cart-Container">
        {/* <h1>Load Users: {users.length}</h1> */}
        {users.map((user) => (
          <Cart
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default CartLoad;
