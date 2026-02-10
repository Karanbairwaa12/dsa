const { buildList } = require("./buildList");
const { printList } = require("./printList");

var oddEvenList = function(head) {
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(odd.next !== null && odd !== null) {
        odd.next = odd.next.next;
        odd = odd.next;

        even.next = even.next.next;
        even = even.next
    }

    odd.next = evenHead;

    return head;
};

let head1 = buildList([1,2,3,4,5])

const node = oddEvenList(head1, 2)
printList(node)