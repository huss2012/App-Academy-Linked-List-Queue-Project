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
        //O(n)=> Because we have loop and the time will increase as the length of the linked list increase.
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
        //1.return undefined if empty.
        if (!this.head) {
            return undefined;
        }
        //2.If the head exesit make it to point to the next value.
        if (this.head) {
            let removedHead = this.head
            this.head = this.head.next;
            //3.Update the length
            this.length--;
            //4.Return the linked list.
            return removedHead;
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1) => Beacuse there is only an assaingment of variables no loops or operations.
    }

    removeFromTail() {
        // Remove node at tail
        //1.Undefined if is empty.
        if (!this.head) {
            return undefined;
        }
        //2.loop through the linked list
        let removedEle;
        let curr = this.head;

        while (curr.next) {
            //Check for the next pointer:
            if (!curr.next.next) {
                removedEle = curr.next;
                curr.next = null
                this.length--;
                return removedEle;
            }
            //Update status of the loop:
            curr = curr.next;
        }
        //removedEle = curr;
        this.head = null;
        this.length--;
        return removedEle;

        //This solution is valid.
        // if (this.head && this.length === 1) {
        //     removedEle = this.head;
        //     this.head = null;
        //     this.length--;
        //     return removedEle;
        // } else {//if the linked list is not empty and has more then one element.
        //     //need to loop through the linked list untill count reach to length - 1
        //     let curr = this.head;
        //     while (curr.next) {
        //         //The goal of the if statment is only to chack the last element before we reach to null and exit from the loop.
        //         if (curr.next.next === null) {
        //             removedEle = curr.next;
        //             curr.next = null;
        //             this.length--;
        //             return removedEle;
        //         }
        //         curr = curr.next;
        //     }
        // }

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
