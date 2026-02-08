const { buildList } = require("./buildList");
const { Node } = require("./node");
const { printList } = require("./printList");

var reverse = function (head) {
	if (head === null || head.next === null) return head;
	let prev = new Node();
	let next = head.next;

	while (next !== null) {
		head.next = prev;
		prev = head;
		head = next;
		next = head.next;
	}
	return head;
};
let head1 = buildList([1, 2, 3, 4, 5, 6]);
printList(reverse(head1));
