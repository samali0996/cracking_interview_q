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
    var lPointer = head
    var lHead
    while(lPointer !== null && lPointer.data >= x) {
        lPointer = lPointer.next
    }
    if (lPointer !== null) {
        lHead = new Node(lPointer.data)
        while (lPointer.next !== null) {
            lPointer = lPointer.next
            if (lPointer.data < x) {
                lHead.appendToTail(lPointer.data)
            }
        }
    }
    var uPointer = head
    var uHead
    while (uPointer !== null && uPointer.data < x) {
        uPointer = uPointer.next
    }
    if (uPointer !== null) {
        uHead = new Node(uPointer.data)
        while (uPointer.next !== null) {
            uPointer = uPointer.next
            if (uPointer.data >= x) {
                uHead.appendToTail(uPointer.data)
            }
        }
    }
    // append uHead to end of lHead
    if (lHead) {
        var pointer = lHead
        while (pointer.next !== null) {
            pointer = pointer.next
        }
        pointer.next = uHead
    } else {
        lHead = uHead
    }
    return lHead
}

function reverseList(head) {
    var stack = []
    var n = head
    while (n) {
        stack.push(n.data)
        n = n.next
    }
    console.log(stack)
    n = head
    while (n) {
        n.data = stack.pop()
        n = n.next
    }
    return head
}

function sumLists(number1List, number2List) {

    var sumList = null
    var carry = false
    number1List = reverseList(number1List)

    number2List = reverseList(number2List)
    while (number1List || number2List) {
        var number1 = number1List ? number1List.data : 0
        var number2 = number2List ? number2List.data : 0
        var sum = number1 + number2
        if (carry) {
            sum += 1
            carry = false
        }
        if (sum >= 10) {
            carry = true
            sum = sum % 10
        }
        if (!sumList) {
            sumList = new Node(sum)
        } else {
            sumList.appendToTail(sum)
        }
        number1List = number1List ? number1List.next : null
        number2List = number2List ? number2List.next : null
    }
    if (carry) {
        sumList.appendToTail(1)
    }
    sumList = reverseList(sumList)
    sumList.printLinkedList()
}

var head = new Node(2);
head.appendToTail(3);
head.appendToTail(4);
head.appendToTail(2);
head.appendToTail(5);
head.appendToTail(2);
head.appendToTail(3);
// head.printLinkedList();
// remAllDeps(head)
// remDepsNoHash(head)
// var k = kToLast(6, head)
// delMiddleNode(k)
// partition(4, head).printLinkedList();
var number1 = new Node(7)
number1.appendToTail(1)
number1.appendToTail(6)
var number2 = new Node(5)
number2.appendToTail(9)
number2.appendToTail(6)
sumLists(number1, number2)
// head.printLinkedList();
