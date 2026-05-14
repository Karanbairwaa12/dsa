const fs = require('fs');

const slidingWindowXor = function (n, k, x, a, b, c) {
    // Note: If 'n' is very large, consider optimizing memory by not storing the whole array
    let arr = new Array(n).fill(0);
    arr[0] = x;
    for(let i = 1; i < n; i++) {
        // Use BigInt if (arr[i-1] * a + b) can exceed 2^53 - 1 (9 quadrillion)
        arr[i] = (arr[i-1] * a + b) % c;
    }

    let i = 0;
    let j = 0;
    let xor = 0;
    let result = 0;
    
    while(j < n) {
        result = result ^ arr[j];
        
        if(j - i + 1 === k) {
            xor = xor ^ result;
            result = result ^ arr[i]; // Successfully removes the leftmost element using your XOR rule
            i++;
        }
        j++;
    }
    console.log(xor);
};

function main() {
    // Read all input from standard input (file descriptor 0)
    const input = fs.readFileSync(0, 'utf-8');
    const tokens = input.trim().split(/\s+/);
    
    if (tokens.length < 6) return; // Prevent executing if input is incomplete
    
    let ptr = 0;
    const n = parseInt(tokens[ptr++], 10);
    const k = parseInt(tokens[ptr++], 10);
    const x = parseInt(tokens[ptr++], 10);
    const a = parseInt(tokens[ptr++], 10);
    const b = parseInt(tokens[ptr++], 10);
    const c = parseInt(tokens[ptr++], 10);

    slidingWindowXor(n, k, x, a, b, c);
}

main();
  