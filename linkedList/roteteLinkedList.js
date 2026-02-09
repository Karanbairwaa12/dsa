const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");

var rotateLinked = function(head,n) {
    let size = 0;
    let ans = new Node();
    let ansHead = ans;
    ans.next = head;
    while(ans.next != null) {
        ans = ans.next;
        size++;
    }
    ans.next = ansHead.next;
    
    let len = size - (n%size);
    for(let i =0;i<len;i++) {
        ans = ans.next;
    }
    let temp = ans.next;
    ans.next = null
    ans = temp;
    return ans;
};
let head1 = buildList([1,2,3])
printList(head1)
printList(rotateLinked(head1,4))
