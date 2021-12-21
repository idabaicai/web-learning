"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useMousePosition = function () {
    var _a = react_1.useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    react_1.useEffect(function () {
        var updateMouse = function (e) {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('click', updateMouse);
        return function () {
            console.log('remove effect');
            document.removeEventListener('click', updateMouse);
        };
    }, []);
    return position;
};
exports["default"] = useMousePosition;
