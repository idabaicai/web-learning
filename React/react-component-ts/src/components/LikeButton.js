"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_1 = require("../App");
var LikeButton = function () {
    // const [obj, setObj] = useState({like: 0, on: true});
    var _a = react_1.useState(0), like = _a[0], setLike = _a[1];
    var _b = react_1.useState(true), on = _b[0], setOn = _b[1];
    var domRef = react_1.useRef(null);
    // 使用 useRef 会得到更新后的 currentValue
    var likeRef = react_1.useRef(0);
    // 使用 useContext Hooks
    var themes = react_1.useContext(App_1.ThemeContext);
    console.log(themes);
    var style = {
        background: themes.background,
        color: themes.color
    };
    function handleAlertClick() {
        setTimeout(function () {
            alert("you click on " + likeRef.current + " times");
        }, 3000);
    }
    // similar to componentDidMount and componentDidupdate:
    react_1.useEffect(function () {
        document.title = "You click button " + like + " times";
    }, [like]); // Only re-run the effet if like changes
    react_1.useEffect(function () {
        if (domRef && domRef.current) {
            domRef.current.focus();
        }
    });
    return (<div>
      <input type="text" placeholder="" ref={domRef}/>
      <button style={style} onClick={function () {
            setLike(like + 1);
            likeRef.current++;
        }}>👍 {like}</button>
      <button onClick={function () {
            setOn(!on);
        }}> {on ? 'On' : 'True'} </button>
      <button onClick={handleAlertClick}>Alert</button>
    </div>);
};
exports["default"] = LikeButton;
