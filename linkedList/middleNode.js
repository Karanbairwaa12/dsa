const { buildList } = require("./buildList")


var middleNode = function(head1) {
    let slow = head1;
    let fast = head1;

    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next !== null) {
        slow = slow.next
    }
    console.log(slow.value)
}

let head1 = buildList([1,2,3,4,5,6])
console.log(head1.value, middleNode(head1))