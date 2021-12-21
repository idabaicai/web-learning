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
var Robots_1 = require("../components/Robots");
var App_module_css_1 = require("./App.module.css");
var logo_svg_1 = require("./assets/images/logo.svg");
var ShoppingCart_1 = require("../components/ShoppingCart");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            robotGallery: []
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            _this.setState({
                robotGallery: data
            });
        });
    };
    App.prototype.render = function () {
        return (<div className={App_module_css_1["default"].app}>
        {/* header start */}
        <div className={App_module_css_1["default"].appHeader}>
          <img src={logo_svg_1["default"]} alt="logo" className={App_module_css_1["default"].appLogo}/>
          <h2>机器人购物平台</h2>
        </div>
        {/* header end */}
        <ShoppingCart_1["default"] />
        <div className={App_module_css_1["default"].robotList}>
          {this.state.robotGallery.map(function (item) { return <Robots_1["default"] key={item.id} id={item.id} name={item.name} email={item.email}/>; })}
        </div>
      </div>);
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
