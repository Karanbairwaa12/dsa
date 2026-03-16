let arr = [1,1,1,1,1];
let target = 3
let count = 0;

let targetSum2 = function(i, sum) {
    if(sum === target) {
        count++;
        return;
    }
    if(i === arr.length) return;

    targetSum2(i+1, sum + arr[i])
    targetSum2(i+1, sum - arr[i])

}
targetSum2(0, 0)
console.log(count +1)