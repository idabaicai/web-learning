/**
 * Object type
 */
function printName(name) {
    var _a;
    console.log((_a = name.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ firstName: 'Zhang', lastName: 'YM' });
printName({ firstName: 'Zhang' });
