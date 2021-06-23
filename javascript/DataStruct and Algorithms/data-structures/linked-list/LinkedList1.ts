class ListNode {
  val: number;
  next: Node | null;
  constructor(val?:number, next?:Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list1 = new ListNode(1);
const list2 = new ListNode(2);
const list3 = new ListNode(3);

console.log(list1);
