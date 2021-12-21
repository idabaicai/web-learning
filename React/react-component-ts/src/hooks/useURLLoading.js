"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var useUrlLoading = function (url, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(null), data = _a[0], setData = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        setLoading(true);
        axios_1["default"].get(url).then(function (res) {
            setData(res.data);
            setLoading(false);
        });
    }, deps);
    return [data, loading];
};
exports["default"] = useUrlLoading;
