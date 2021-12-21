var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount('dabai', 1001);
console.log(user);
var sex = 'male';
var lockState1 = 'locked';
var arr1 = ['str1', 'str2'];
var objWithName = [
    { name: '23' }
];
console.log(objWithName);
function logPoint(p) {
    console.log("x: " + p.x + ", y: " + p.y);
}
var p1 = {
    x: 12.2,
    y: 10.6
};
var object = backpack.get();
backpack.add('23');
