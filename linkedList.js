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

  add(data) {
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

ll.add(12);
ll.add(54);
ll.add(25);

ll.printList();
