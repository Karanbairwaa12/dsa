var ladderLength = function (bW, eW, list) {
	let wordSet = new Set([...list]);
	if (!wordSet.has(eW)) return 0;

	let set = new Set([bW]);
	let qu = [[bW.split(""), 1]];

	while (qu.length > 0) {
		let [word, count] = qu.shift();
		if (eW == word.join("")) return count;
		for (let i = 0; i < word.length; i++) {
			let rev = word[i];
			for (let j = 0; j < 26; j++) {
				word[i] = String.fromCharCode(97 + j);
				let next = word.join("");

				if (wordSet.has(next) && !set.has(next)) {
					set.add(next);
					qu.push([[...word], count + 1]);
				}
			}
			word[i] = rev;
		}
	}
	return 0;
};
let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log"];

console.log(ladderLength(beginWord, endWord, wordList));
