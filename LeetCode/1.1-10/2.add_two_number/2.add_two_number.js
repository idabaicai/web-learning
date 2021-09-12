var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var l3 = new ListNode();
    var len1 = 0; // l1 长度
    var len2 = 0; // l2 长度
    var l11 = l1;
    var l22 = l2;
    // 计算 ListNode1 和 ListNode2 长度 
    while (l11.next !== null) {
        len1++;
        l11 = l11.next;
    }
    while (l22.next !== null) {
        len2++;
        l22 = l22.next;
    }
    console.log('li and l2', l1, l2);
    return null;
}
var listNode2 = new ListNode(2);
var listNode4 = new ListNode(4);
var listNode3 = new ListNode(3);
// 连接链表
listNode2.next = listNode4;
listNode4.next = listNode3;
var listNode5 = new ListNode(5);
var listNode6 = new ListNode(6);
var listNode7 = new ListNode(7);
listNode5.next = listNode6;
listNode6.next = listNode7;
console.log(listNode2);
console.log(addTwoNumbers(listNode2, listNode5));
