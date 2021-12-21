"use strict";
exports.__esModule = true;
exports.AppStateProvider = exports.appSetStateContext = exports.appContext = void 0;
var react_1 = require("react");
var defaultContextValue = {
    name: 'dabai',
    age: 23,
    shoppingCart: { items: [] }
};
exports.appContext = react_1["default"].createContext(defaultContextValue);
exports.appSetStateContext = react_1["default"].createContext(undefined);
var AppStateProvider = function (props) {
    var _a = react_1.useState(defaultContextValue), state = _a[0], setState = _a[1];
    return (<exports.appContext.Provider value={state}>
      <exports.appSetStateContext.Provider value={setState}>
        {props.children}
      </exports.appSetStateContext.Provider>
    </exports.appContext.Provider>);
};
exports.AppStateProvider = AppStateProvider;
