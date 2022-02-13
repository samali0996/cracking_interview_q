class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    var data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  push(data) {
    var newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  peek() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.top.data;
  }
  isEmpty() {
    return this.top === null;
  }
}
class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class ArrayStack {
  constructor() {
    this.container = [];
  }
  isEmpty() {
    return this.container.length === 0;
  }
  pop() {
    if (this.isEmpty()) throw new Error('empty stack');
    return this.container.pop();
  }
  push(data) {
    this.container.push(data);
  }
  peek() {
    if (this.isEmpty()) throw new Error('empty stack');
    return this.container[this.container.length - 1];
  }
}

class StackWithMin extends ArrayStack {
  constructor() {
    super();
    this.minStack = new ArrayStack();
  }
  push(data) {
    if (typeof data !== 'number')
      throw new Error(`Value ${data} is not a number`);
    if (super.isEmpty()) {
      this.minStack.push(data);
    } else {
      if (data <= this.minStack.peek()) {
        this.minStack.push(data);
      }
    }
    super.push(data);
  }
  pop() {
    if (super.isEmpty()) throw new Error('empty stack');
    if (super.peek() === this.minStack.peek()) {
      this.minStack.pop();
    }
    super.pop();
  }
  getMin() {
    if (this.minStack.isEmpty()) throw new Error('empty stack');
    return this.minStack.peek();
  }
}

var myStackWMin = new StackWithMin();
myStackWMin.push(-2);
myStackWMin.push(1);
// myStackWMin.push('hello');
myStackWMin.push(3);
myStackWMin.push(0);
myStackWMin.pop();
console.log(myStackWMin.getMin());
