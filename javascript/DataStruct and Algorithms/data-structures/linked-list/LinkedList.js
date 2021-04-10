import LinkedListNode from './LinkedListNode.js'
export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * 在前面插入node
     * @param {*} value
     * @return {LinkedList} 
     */
    prepend(value) {
        // new node
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        // 如果没有 tail，将这个node设置为 tail
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    /**
     * 
     * @param {*} value 
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value)
        // 如果没有有节点 设置头节点
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        }
    }
}