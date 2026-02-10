const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");

let reverse = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let prev = new Node()
    let curr = head;
    while (curr.next != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    curr.next = prev;
    prev = curr;
    head.next = null

    // console.log(prev)
    return prev;
}

var addTwoNumbers = function (l1, l2) {
    // let l1reverse = reverse(l1);
    // // printList(l1reverse)
    // let l2reverse = reverse(l2)

    // console.log(l1reverse, l2reverse, l1, l2)
    let f = l1;
    let s = l2
    let divide = 0;
    let node = new Node()
    let curr = node;
    while (f != null && s != null) {
        let val = f.value + s.value + divide
        let reminder = val % 10;
        let newNode = new Node(reminder)
        curr.next = newNode;
        curr = curr.next;
        divide = Math.floor(val / 10)
        f = f.next;
        s = s.next;
    }
    while (f != null) {
        let val = f.value + divide
        let reminder = val % 10;
        let newNode = new Node(reminder)
        curr.next = newNode;
        curr = curr.next;
        divide = Math.floor(val / 10)
        f = f.next;
    }

    while (s != null) {
        let val = s.value + divide
        let reminder = val % 10;
        let newNode = new Node(reminder)
        curr.next = newNode;
        curr = curr.next;
        divide = Math.floor(val / 10)
        s = s.next;
    }

    if (divide != 0) {
        let newNode = new Node(divide)
        curr.next = newNode;
        curr = curr.next;
    }

    return node.next
};

let head1 = buildList([2, 4, 3])
let head2 = buildList([5, 6, 4])
printList(addTwoNumbers(head1, head2))