
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?:number, next?:ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1:ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();
  let len1 = 0; // l1 长度
  let len2 = 0; // l2 长度
  let l11 = l1;
  let l22 = l2;
  // 计算 ListNode1 和 ListNode2 长度 
  while(l11.next !== null) {
    len1++;
    l11 = l11.next;
  }
  while(l22.next !== null) {
    len2++;
    l22 = l22.next;
  }
  console.log('li and l2',l1, l2);
  return null;
}

const listNode2 = new ListNode(2);
const listNode4 = new ListNode(4);
const listNode3 = new ListNode(3);
// 连接链表
listNode2.next = listNode4;
listNode4.next = listNode3;


const listNode5 = new ListNode(5);
const listNode6 = new ListNode(6);
const listNode7 = new ListNode(7);

listNode5.next = listNode6;
listNode6.next = listNode7;

console.log(listNode2);
console.log(addTwoNumbers(listNode2, listNode5));


