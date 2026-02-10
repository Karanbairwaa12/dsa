const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");

var mergeTwoLists = function (l1, l2) {
    let ans = new Node();
    let ansHead = ans;
    while (l1 && l2) {
        if (l1.value <= l2.value) {
            ans.next = l1;
            l1 = l1.next;

        } else {
            ans.next = l2;
            l2 = l2.next;
        }
        ans = ans.next;
    }
    if(l1) {
        ans.next = l1
    }else {
        ans.next = l2
    }
    return ansHead.next;
};
let head1 = buildList([1, 2, 4])
let head2 = buildList([1, 3, 4])
printList(mergeTwoLists(head1, head2))
