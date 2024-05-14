const { newInMsgEvtInterceptor } = require("fix/handlers/inMsgEvtInterceptor");
const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        //this.node = new SinglyLinkedNode();
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        //this.head = newNode;

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            //Put the next pointer for the current tail to point to the newNode.
            this.tail.next = newNode;
            //Shift the tail to point to the newNode.
            this.tail = newNode;
        }

        this.length++;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let removeNode = this.head;
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length >= 2) {
            this.head = this.head.next;
        }
        this.length--;
        return removeNode.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
