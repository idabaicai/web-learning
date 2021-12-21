"use strict";
exports.__esModule = true;
exports.ThemeContext = void 0;
var react_1 = require("react");
require("./App.css");
var LikeButton_1 = require("./components/LikeButton");
var MouseTracker_1 = require("./components/MouseTracker");
var HelloWorld_1 = require("./components/HelloWorld");
// 自定义鼠标移动 hooks
var useMousePosition_1 = require("./hooks/useMousePosition");
// 自定义 loading hooks
var useURLLoading_1 = require("./hooks/useURLLoading");
var themes = {
    'light': {
        color: '#000',
        background: '#eee'
    },
    'dark': {
        color: '#fff',
        background: '#222'
    }
};
exports.ThemeContext = react_1["default"].createContext(themes.light);
function App() {
    var url = 'https://dog.ceo/api/breeds/image/random';
    // 主题
    var _a = react_1.useState('light'), theme = _a[0], setTheme = _a[1];
    var _b = react_1.useState(true), show = _b[0], setShow = _b[1];
    // 调用自定义 hooks
    var position = useMousePosition_1["default"]();
    // 第二个参数当 show 变化时重新调用 effect
    var _c = useURLLoading_1["default"](url, [show]), data = _c[0], loading = _c[1];
    var dogResult = data;
    return (<div className="App">
      <exports.ThemeContext.Provider value={themes[theme]}>
        <button onClick={function () {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }}>change themes</button>
        <LikeButton_1["default"] />
        <HelloWorld_1["default"] />
        {show && <MouseTracker_1["default"] />}
        <button onClick={function () {
            setShow(!show);
        }}>toggle show</button>
        
        <p>自定义 hooks</p>
        <p>x: {position.x}, y: {position.y} </p>
        <hr />
        <p>自定义 loading</p>
        {loading ? <p>loading...</p> : <img src={dogResult && dogResult.message} alt=""/>}
      </exports.ThemeContext.Provider>
    </div>);
}
exports["default"] = App;
