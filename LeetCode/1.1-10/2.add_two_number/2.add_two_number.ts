
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?:number, next?:ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  append(val:number):void {
    this.next = new ListNode(val, null)
  }
}

const listNode = new ListNode(3);
listNode.append(2);
listNode.append(6);
listNode.append(3);
listNode.append(7);


console.log(listNode);

