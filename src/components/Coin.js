import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h2 style={{ color: "pink" }}>Name:{name}</h2>
      <img src={icon} />
      <h2 style={{ color: "skyblue" }}>Price:{price}</h2>
      <h2 style={{ color: "skyblue" }}>Symbol:{symbol}</h2>
    </div>
  );
}
export default Coin;
