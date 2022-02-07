class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  appendToTail(d) {
    var end = new Node(d);
    var n = this;
    while (n.next != null) {
      n = n.next;
    }
    n.next = end;
  }
  printLinkedList() {
    var string = "";
    var n = this;
    while (n != null) {
      string += `${n.data}-->`;
      n = n.next;
    }
    console.log(string);
  }
}

function remDepsHash(head) {
  var dataHash = {};
  var n = head;
  var prev = null;
  while (n != null) {
    if (!dataHash[n.data]) {
      dataHash[n.data] = true;
      prev = n;
    } else {
      prev.next = n.next;
    }
    n = n.next;
  }
}

function remDeps(toDelete, head) {
  var n = head.next;
  var prev = head;
  while (n !== null) {
    if (n.data === toDelete) {
      prev.next = n.next;
    } else {
      prev = n;
    }
    n = n.next;
  }
}

function remDepsNoHash(head) {
  var n = head;
  while (n.next !== null) {
    remDeps(n.data, n);
    n = n.next;
  }
}

function kToLast(k, head) {
  var counterPointer = head;
  var finderPointer = head;
  var nodeCounter = 1;
  while (counterPointer.next != null) {
    counterPointer = counterPointer.next;
    nodeCounter += 1;
  }
  if (k > nodeCounter) return false;
  var jumps = nodeCounter - k;
  for (var i = 0; i < jumps; i++) {
    finderPointer = finderPointer.next;
  }
  return finderPointer;
}

function delMiddleNode(n) {
  if (n.next === null) {
    n.next = null;
    n.data = null;
    n = null;
  } else {
    n.data = n.next.data;
    n.next = n.next.next;
  }
}

function partition(x, head) {
  var lh = (ln = uh = un = n = null);
  var n = head;
  while (n.next !== null) {
    if (n.data < x) {
      // console.log(n.data)
      if (lh === null) {
        lh = new Node(n.data);
        ln = lh.next;
      } else {
        ln = new Node(n.data);
        ln = ln.next;
      }
    }
    n = n.next;
  }
  lh.printLinkedList();
}

var head = new Node(2);
head.appendToTail(3);
head.appendToTail(4);
head.appendToTail(2);
head.appendToTail(5);
head.appendToTail(2);
head.appendToTail(3);
head.printLinkedList();
// remAllDeps(head)
// remDepsNoHash(head)
// var k = kToLast(6, head)
// delMiddleNode(k)
partition(3, head);
head.printLinkedList();
