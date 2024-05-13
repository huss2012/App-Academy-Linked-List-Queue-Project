// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        //1.Create the node.
        const newNode = new SinglyLinkedNode(val);
        //2.Set the pointer for the newNode to point to the old head.
        newNode.next = this.head;
        //3.Shift the head to point to the newNode value.
        this.head = newNode;
        //4.Update the length of the linked list.
        this.length++;
        //5.Return the linked list;
        return this;

        // Write oru hypothesis on the time complexity of this method here
        //O(1) => Only creation and modifying the linked list.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        //Check if the linked list is mepty.
        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        //If the linked list is not empty. loop through untill reach null
        let curr = this.head;
        while (curr.next) { //check on the pointer value
            curr = curr.next;
        }
        curr.next = newNode;

        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
