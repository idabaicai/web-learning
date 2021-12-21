"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.useAddtoCart = exports.withAddToCart = void 0;
var react_1 = require("react");
var AppState_1 = require("../AppState");
var withAddToCart = function (ChildComponent) {
    return function (props) {
        var setState = react_1.useContext(AppState_1.appSetStateContext);
        var addToCart = function (id, name) {
            if (setState) {
                setState(function (state) {
                    return __assign(__assign({}, state), { shoppingCart: {
                            items: __spreadArray(__spreadArray([], state.shoppingCart.items), [{ id: id, name: name }])
                        } });
                });
            }
        };
        return <ChildComponent {...props} addToCart={addToCart}/>;
    };
};
exports.withAddToCart = withAddToCart;
var useAddtoCart = function () {
    var setState = react_1.useContext(AppState_1.appSetStateContext);
    var addToCart = function (id, name) {
        if (setState) {
            setState(function (state) {
                return __assign(__assign({}, state), { shoppingCart: {
                        items: __spreadArray(__spreadArray([], state.shoppingCart.items), [{ id: id, name: name }])
                    } });
            });
        }
    };
    return addToCart;
};
exports.useAddtoCart = useAddtoCart;
