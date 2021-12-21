"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("./components/Button/Button");
var App = function () {
    return (<div className="app">
      <h3>button</h3>
      <Button_1["default"] btnType={Button_1.ButtonType.Primary}>Primary</Button_1["default"]>
      <Button_1["default"] btnType={Button_1.ButtonType.Default}>Default</Button_1["default"]>
      <Button_1["default"] btnType={Button_1.ButtonType.Link}>Link</Button_1["default"]>
      <Button_1["default"] btnType={Button_1.ButtonType.Danger}>Danger</Button_1["default"]>
    </div>);
};
exports["default"] = App;
