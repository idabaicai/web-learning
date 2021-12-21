"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ButtonType = exports.ButtonSize = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, disabled = props.disabled, size = props.size, children = props.children, href = props.href, className = props.className, restProps = __rest(props, ["btnType", "disabled", "size", "children", "href", "className"]);
    var classes = classnames_1["default"]('btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a.disabled = disabled,
        _a));
    if (btnType === ButtonType.Link) {
        return (<a className={classes} href={href} {...restProps}>
        {children}
      </a>);
    }
    else {
        return (<button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>);
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};
exports["default"] = Button;
