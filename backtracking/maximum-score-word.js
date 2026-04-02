let words = ["dog", "cat", "dad", "good"];
let letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"];
let score = [
	1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

var maxScoreWords = function (words, letters, score) {
    let frq = new Array(26).fill(0);
    for(let i =0;i<letters.length;i++) {
        frq[letters[i].codePointAt(0) - 'a'.codePointAt(0)] = frq[letters[i].codePointAt(0) - 'a'.codePointAt(0)] + 1

    }
    // console.log(frq)
	let traverse = function(words, freq, score, idx) {
        if(idx === words.length) {
            return 0;
        }
        let ninq = traverse(words, freq, score, idx + 1);

        let flag = true;
        let word = words[idx];
        let sc = 0;
        for(let i =0;i<word.length;i++) {
            if(freq[word[i].codePointAt(0) - 'a'.codePointAt(0)] === 0) {
                flag = false;
            }
            freq[word[i].codePointAt(0) - 'a'.codePointAt(0)] = freq[word[i].codePointAt(0) - 'a'.codePointAt(0)] -1;
            sc = sc + score[word[i].codePointAt(0) - 'a'.codePointAt(0)]
        }
        let newSc = 0;
        if(flag) {
            newSc = sc + traverse(words, freq, score, idx + 1)
        }

        for(let i =0;i<word.length;i++){
            freq[word[i].codePointAt(0) - 'a'.codePointAt(0)] = freq[word[i].codePointAt(0) - 'a'.codePointAt(0)] +1;
        }

        return Math.max(newSc, ninq)
    }
    console.log(traverse(words, frq, score, 0))
};
maxScoreWords(words, letters, score);
