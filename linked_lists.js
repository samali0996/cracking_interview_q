class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
    appendToTail(d) {
        var end = new Node(d)
        var n = this
        while (n.next != null) {
            n = n.next
        }
        n.next = end
    }
    printLinkedList() {
        var string = ''
        var n = this
        while (n != null) {
            string += `${n.data}-->`
            n = n.next
        }
        console.log(string)
    }
}

function remDepsHash(head) {
    var dataHash = {}
    var n = head
    var prev = null
    while (n != null) {
        if (!dataHash[n.data]) {
            dataHash[n.data] = true
            prev = n
        } else {
            prev.next = n.next
        }
        n = n.next
    }
}

function remDeps(toDelete, head) {
    var n = head.next
    var prev = head
    while (n !== null) {
        if (n.data === toDelete) {
            prev.next = n.next
        } else {
            prev = n
        }
        n = n.next
    }
}

function remDepsNoHash(head) {
    var n = head
    while (n.next !== null) {
        remDeps(n.data, n)
        n = n.next
    }
}

var head = new Node(2)
head.appendToTail(3)
head.appendToTail(4)
head.appendToTail(2)
head.appendToTail(5)
head.appendToTail(2)
head.appendToTail(3)
head.printLinkedList()
// remAllDeps(head)
remDepsNoHash(head)
head.printLinkedList()




