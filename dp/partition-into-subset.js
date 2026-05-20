let partitionIntoSubset = function(n,k) {
    if(n == 0 || k == 0 || n < k) {
        return 0
    }
    if(n === k) {
        return 1;
    }
    return k*partitionIntoSubset(n-1, k) + partitionIntoSubset(n-1, k-1)
}
console.log(partitionIntoSubset(4, 3))