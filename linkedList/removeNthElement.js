const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");
var removeNthElement = function(head, n) {
    let size = 0;
    let node = new Node()
    let curr = head;
    while(curr != null) {
        size++;
        curr = curr.next
    }

    let len = size-n
    size = 0;
    node.next = head;
    curr = node
    while(curr != null) {
        if(size === len) {
            curr.next = curr.next.next;
        }
        size++;
        curr = curr.next;
    }
    return node.next

}

var removeNthElementRecursively = function(head, n) {
    let size = 0;
    let currSize = 0
    let node = new Node()
    node.next = head;

    let recursive = function(node, n) {        
        if(node === null) {
            return;
        }
        size++;
        currSize = size;
        recursive(node.next, n)
        let len = size-n;
        if(currSize === len) {
            node.next = node.next.next;
        }
        currSize--;
    }
    let curr = node;
    recursive(curr,n)
    return curr.next;
    // console.log(size)
}
let head1 = buildList([1,2,3,4,5])

const node = removeNthElementRecursively(head1, 2)
console.log(node)
printList(node)