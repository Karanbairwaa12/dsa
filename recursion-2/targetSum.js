let arr = [10,20,30,40,50];
let target = 60

let targetSum = function(i, sum, num) {
    if(i === arr.length) {
        if(sum === target) {
            console.log(num)
        }
        return;
    }
    
    num.push(arr[i]);
    targetSum(i+1, sum + arr[i], num);
    num.pop()
    targetSum(i+1, sum, num)
}
targetSum(0, 0, [])