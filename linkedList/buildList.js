const {Node} = require("./node")

var buildList = function(arr) {
    var node = new Node(arr[0])

    let curr = node;
    for(let i =1;i<arr.length;i++) {
       let newNode= new Node(arr[i])
        curr.next = newNode;
        curr = newNode;
    }

    return node;
}

module.exports = {buildList}