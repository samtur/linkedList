class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    console.log(this.size);
  }

  getHead() {
    console.log(this.head);
  }

  getTail() {
    var current;
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log(current);
  }

  append(data) {
    var node = new Node(data);
    var current;
    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(data) {
    var node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  printList() {
    var current = this.head;
    var str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }

  atIndex(index) {
    var current = this.head;
    var count = 0;
    while (current) {
      if (count === index) {
        console.log(current);
        return current;
      } else {
        count++;
        current = current.next;
      }
    }
    console.log("No data found.");
    return;
  }

  pop() {
    // If there is nothing to pop
    if (!this.head) {
      console.log("List is empty, nothing to pop!");
      return;
    }

    // If there is only one node
    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    // Iterate through the list
    let current = this.head;
    let previous = null;

    // Every iteration update previous to point to the previous node,
    // and current to point to next.
    while (current.next) {
      previous = current;
      current = current.next;
    }

    // When finished set the previous node's pointer to null;
    // and -- the size of the linked list by 1
    previous.next = null;
    this.size--;
  }
}

let ll = new LinkedList();

ll.append(12);
ll.append(54);
ll.append(25);
ll.prepend(11);
ll.pop();
ll.atIndex(2);

ll.printList();
