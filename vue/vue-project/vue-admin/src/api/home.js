"use strict";
exports.__esModule = true;
exports.getInfo = void 0;
var request_1 = require("@/utils/request");
function getInfo() {
    return request_1["default"]({
        url: '/api/user',
        method: 'get'
    });
}
exports.getInfo = getInfo;
