"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MouseTracker = function () {
    var _a = react_1.useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    react_1.useEffect(function () {
        console.log('add effect', position.x);
        var updateMouse = function (e) {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('click', updateMouse);
        return function () {
            console.log('remove effect', position.x);
            document.removeEventListener('click', updateMouse);
        };
    }); // [] 表示添加一次 effect
    console.log('before render');
    return (<div>
      <p>x: {position.x} y: {position.y}</p>
    </div>);
};
exports["default"] = MouseTracker;
