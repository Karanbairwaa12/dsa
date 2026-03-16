const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");

var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    let dummy = new Node();
    dummy.next = head;

    let p = dummy;
    let c = head;
    let n = head.next;

    while(c !== null && n !== null) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = c.next;
        n = c && c.next;
    }

    return dummy.next;
};

let head1 = buildList([1,2,3,4])
printList(swapPairs(head1))