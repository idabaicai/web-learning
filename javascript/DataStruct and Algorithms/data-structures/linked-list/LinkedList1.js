var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var list1 = new ListNode(1);
var list2 = new ListNode(2);
var list3 = new ListNode(3);
console.log(list1);
