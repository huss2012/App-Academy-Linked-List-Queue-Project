// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.length;
        }

        newNode.next = this.head;
        this.head = newNode;

        return this.length;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        /*O(1) implementation:*/
        return this.length;
        // /*O(n) implementation:*/
        // let current = this.head;
        // let count = 1;
        // while (current.next) {
        //     count++;
        //     current = current.next;
        // }
        // return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let currentNode = this.head;
        let sum = 0;
        while (currentNode) {//will reach to null and exit from the loop and the last value will still not added to the sum
            sum += currentNode.value;
            currentNode = currentNode.next;
        }
        //So we need to add it here.
        //sum += currentNode.value//this currentNode next pointer value id null.
        return sum;
        // Write your hypothesis on the time complexity of this method here
        //O(n): Because there is a while loop the time will increase as the size of the linked list increase.
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (n < this.listLength()) {
            let currentNode = this.head;
            let count = 0;

            while (count < n) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let currentNode = this.head;
        let count = 1;
        let locator = Math.round(this.length / 2);

        while (count < locator) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
        // let mid = Math.round(this.listLength() / 2);
        // return this.findNthNode(mid);
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let currentNode = this.head;
        const newList = new SinglyLinkedList()

        while (currentNode) {
            newList.addToHead(currentNode.value);
            currentNode = currentNode.next;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let headTrail = this.head;
        let tailTrail = this.tail;

        while (headTrail !== tailTrail && headTrail.prev !== tailTrail) {
            headTrail = headTrail.next;
            tailTrail = tailTrail.prev;
        }

        return tailTrail;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        newList.head = this.tail;
        let curr = newList.head;
        let original = this.tail;

        while (original) {
            curr.next = original.prev;
            curr.prev = original.next;
            curr = curr.next;
            original = original.prev;
        }

        newList.tail = this.head;

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        const nextTail = this.tail.next;
        this.tail.next = this.tail.prev;
        this.tail.prev = nextTail;
        let curr = this.tail.next;

        const nextHead = this.head.next;
        this.head.next = this.head.prev;
        this.head.prev = nextHead;

        [this.head, this.tail] = [this.tail, this.head];

        while (curr.next) {
            const next = curr.prev;
            curr.prev = curr.next;
            curr.next = next;
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
