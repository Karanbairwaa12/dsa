let gcd = function(num1, num2) {
    let fnum1 = Math.ceil(Math.sqrt(num1));
    let fnum2 = Math.ceil(Math.sqrt(num2));
    let n1 = [];
    let n2 = [];
    for(let i = 1;i<= fnum1;i++) {
        if(num1%i === 0) {
            let val = num1/i;
            n1.push(i)
            n1.push(val);
        }
    }
    for(let i = 1;i<= fnum2;i++) {
        if(num2%i === 0) {
            let val = num2/i;
            n2.push(i)
            n2.push(val);
        }
    }
    n1.sort((a,b) => b-a);
    n2.sort((a,b) => b-a);

    let i =0;
    let j =0;
    while(i < n1.length && j < n2.length) {
        if(n1[i] > n2[j]) {
            i++;
        }else if(n1[i] < n2[j]) {
            j++;
        }else {
            return n1[i]
        }
    }
    return 1;
}

console.log(gcd(36, 24))