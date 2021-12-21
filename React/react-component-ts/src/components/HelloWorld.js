"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_1 = require("../App");
var HelloWorld = function () {
    var themes = react_1.useContext(App_1.ThemeContext);
    var style = {
        color: themes.color
    };
    return (<div style={style}>
      HelloWorld
    </div>);
};
exports["default"] = HelloWorld;
