var printList = function(head) {
    let curr = head;
    let r = "";
    while(curr != null) {
        r = r + " " + curr.value
        curr = curr.next;
    }
    console.log(r)
}

module.exports= {printList}