const { newOutMsgEvtInterceptor } = require("fix/handlers/outMsgEvtInterceptor");

// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //O(1): only shceking statements and assinment.
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        let headNode = this.head;
        if (this.length > 0) {
            //1.Point the current headNode previous pointer to the newNode.
            headNode.prev = newNode;
            //2.Point the pointer of the newNode next to the current headNode.
            newNode.next = headNode;
            //3.Shift the head to point to the newNode.
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        //1.Allocate newNode in memory:
        let newNode = new DoublyLinkedNode(val);
        let tailNode = this.tail;
        //2.Check if he length === 0:
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            //this.length++;
        } else {
            tailNode.next = newNode;
            newNode.prev = tailNode;
            this.tail = newNode;
        }

        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        //1.Check if the list is empty:
        if (!this.head) {
            return undefined;
        }
        let removedHead = this.head;
        //console.log(removedHead);
        //2.Check if the list length is > 0:
        if (this.length > 1) {
            this.head.next.prev = null;
            this.head = this.head.next;
            // this.length--;
            // return removedHead.value;
        }

        //3.Check if the list length === 1:
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            // this.length--;
            // return removedHead.value;
        }
        this.length--;
        return removedHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;
        let removedtail = this.tail;

        if (this.length > 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        if (this.length === 1) {
            this.tail = null;
            this.head = null
        }
        this.length--;
        return removedtail.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
