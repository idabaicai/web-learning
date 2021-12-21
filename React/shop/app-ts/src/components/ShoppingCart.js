"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var ShoppingCart_module_css_1 = require("./ShoppingCart.module.css");
var bi_1 = require("react-icons/bi");
var AppState_1 = require("../AppState");
var ShoppingCart = /** @class */ (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            // 点击 span 时才改变 state
            if (e.target.nodeName === 'SPAN') {
                _this.setState({
                    isOpen: !_this.state.isOpen
                });
            }
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    ShoppingCart.prototype.render = function () {
        var _this = this;
        return (<AppState_1.appContext.Consumer>
        {function (value) {
                return <div className={ShoppingCart_module_css_1["default"].cartContainer}>
          <button className={ShoppingCart_module_css_1["default"].button} onClick={_this.handleClick}>
          <bi_1.BiCart />
          <span>购物车 {value.shoppingCart.items.length} (件)</span>
          </button>
          <div className={ShoppingCart_module_css_1["default"].cartDropDown} style={{
                        display: _this.state.isOpen ? "block" : "none"
                    }}>
            <ul>
              {value.shoppingCart.items.map(function (i) { return <li key={i.id}>{i.name}</li>; })}
            </ul>
        </div>
      </div>;
            }}
        
      </AppState_1.appContext.Consumer>);
    };
    return ShoppingCart;
}(react_1["default"].Component));
exports["default"] = ShoppingCart;
