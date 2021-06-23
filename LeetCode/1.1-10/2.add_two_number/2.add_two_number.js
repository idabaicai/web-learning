var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    ListNode.prototype.append = function (val) {
        this.next = new ListNode(val, null);
    };
    return ListNode;
}());
var listNode = new ListNode(3);
listNode.append(2);
listNode.append(6);
listNode.append(3);
listNode.append(7);
console.log(listNode);
