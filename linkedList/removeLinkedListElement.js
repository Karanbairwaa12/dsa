const { buildList } = require("./buildList");
const { Node } = require("./node");

var removeElements = function(head, val) {
    if(head === null) {
        return null;
    }
    let node = new Node();
    node.next = head;
    
    let curr = node;
    console.log(node)
    while(curr != null && curr.next != null) {
        if(curr.next.val === val) {
            curr = curr.next.next;
        }else {
            curr = curr.next;
        }
    }
    console.log(node.next)
    return node.next;
};
let head1 = buildList([6,1,2,3,6,4,5,6])
let head2 = buildList([])
removeElements(head2,1)