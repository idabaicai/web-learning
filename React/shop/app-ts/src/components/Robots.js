"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Robot_module_css_1 = require("./Robot.module.css");
var AppState_1 = require("../AppState");
var AddToCart_1 = require("./AddToCart");
var Robot = function (_a) {
    var id = _a.id, name = _a.name, email = _a.email, addToCart = _a.addToCart;
    var value = react_1.useContext(AppState_1.appContext);
    return (<div className={Robot_module_css_1["default"].cardContainer}>
      <img src={"https://robohash.org/" + id} alt="robot"/>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>age: {value.age}</p>
      <p>name: {value.name}</p>
      <button onClick={function () { return addToCart(id, name); }}>加入购物车</button>
  </div>);
};
exports["default"] = AddToCart_1.withAddToCart(Robot);
