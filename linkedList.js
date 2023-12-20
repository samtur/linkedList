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
    return;
  }

  getHead() {
    console.log(this.head);
    return;
  }

  getTail() {
    var current;
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log(current);
    return;
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
      str += `(${current.data}) => `;
      current = current.next;
    }
    str += `null`;
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

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        console.log(true);
        return true;
      }
      current = current.next;
    }
    console.log(false);
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        console.log(index);
        return index;
      }
      current = current.next;
      index++;
    }
    console.log("No data matches this value.");
    return;
  }

  insertAt(value, index) {
    let current = this.head;
    let previous = null;
    let count = 0;
    const node = new Node(value);

    // Checks if index is valid not below 0 or greater than linked list size
    if (index > this.size || index < 0) {
      console.log(`Please enter an index between 0 and ${this.size}.`);
      return;
    }

    // Allows us to prepend if index = 0
    if (count === 0 && index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }

    // Iterates through the list and inserts at the index
    while (current) {
      if (index === count) {
        node.next = current;
        current = node;
        previous.next = current;
        this.size++;
        return;
      }
      previous = current;
      current = current.next;
      count++;
    }

    // Allows us to append to the end if the last index is used.
    count = 0;
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return;
  }

  removeAt(index) {
    // Checking for a valid index
    if (index > this.size - 1 || index < 0) {
      console.log(`Please enter an index between 0 and ${this.size - 1}`);
      return;
    }

    // Checking the list is not empty
    if (!this.head) {
      console.log("List is empty, nothing to remove!");
      return;
    }

    // Checking if only 1 node.
    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    // Checking if removing from index 0
    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    // Iterate through the list and remov when count matches index
    while (current) {
      if (count === index) {
        previous.next = current.next;
        this.size--;
        return;
      }
      previous = current;
      current = current.next;
      count++;
    }
  }
}

let ll = new LinkedList();

ll.append(12);
ll.append(54);
ll.append(25);
ll.prepend(11);
ll.append(200);
ll.printList();
ll.removeAt(0);
ll.printList();
