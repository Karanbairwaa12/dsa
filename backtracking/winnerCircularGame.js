var findTheWinner = function(n, k) {
    if(n === 1) {
        return (n-1 + k)%n
    }
    let val = findTheWinner(n-1, k);
};