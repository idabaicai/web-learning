"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Robots_1 = require("./components/Robots");
var RobotDiscount_1 = require("./components/RobotDiscount");
var App_module_css_1 = require("./App.module.css");
var logo_svg_1 = require("./assets/images/logo.svg");
var ShoppingCart_1 = require("./components/ShoppingCart");
var App = function (props) {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var _b = react_1.useState([]), robotGallery = _b[0], setRobotGallery = _b[1];
    var _c = react_1.useState(false), isLoding = _c[0], setLoding = _c[1];
    var _d = react_1.useState(), errorMsg = _d[0], setErrorMsg = _d[1];
    react_1.useEffect(function () {
        document.title = "click " + count + " times";
    }, [count]);
    react_1.useEffect(function () {
        // 在 useEffect 中使用 async 和 await
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoding(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _a.sent();
                        setRobotGallery(data);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        setErrorMsg(e_1.message);
                        return [3 /*break*/, 5];
                    case 5:
                        setLoding(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    return (<div className={App_module_css_1["default"].app}>
        <div>
          <h2>userName: {props.userName} </h2>
          <p>点击了 {count} times</p>
          <button onClick={function () { return setCount(count + 1); }}>click</button>
        </div>
        {/* header start */}
        <div className={App_module_css_1["default"].appHeader}>
          <img src={logo_svg_1["default"]} alt="logo" className={App_module_css_1["default"].appLogo}/>
          <h2>机器人购物平台</h2>
        </div>
        {/* header end */}
        <ShoppingCart_1["default"] />
        {errorMsg === '' ? '' : <div> message: {errorMsg}</div>}
        {!isLoding ?
            <div className={App_module_css_1["default"].robotList}>
              {robotGallery.map(function (item, index) {
                    return index % 2 === 0 ?
                        (<Robots_1["default"] key={item.id} id={item.id} name={item.name} email={item.email}/>) :
                        (<RobotDiscount_1["default"] key={item.id} id={item.id} name={item.name} email={item.email}/>);
                })}
            </div> :
            <div>
              <h2>loding</h2>
            </div>}
      </div>);
};
exports["default"] = App;
