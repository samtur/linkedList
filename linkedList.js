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
}

let ll = new LinkedList();

ll.append(12);
ll.append(54);
ll.append(25);
ll.prepend(11);
ll.getSize();
ll.getHead();
ll.getTail();
ll.printList();
