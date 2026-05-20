let friendPairing= function(n){
    if(n === 1 || n === 2) {
        return n;
    }
    return friendPairing(n-1) + (n-1)*friendPairing(n-2);
}

console.log(friendPairing(4))