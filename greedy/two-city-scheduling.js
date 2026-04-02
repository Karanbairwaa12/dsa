var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    let sum =0;
    for(let i =0;i<costs.length;i++) {
        if(i <= costs.length/2 -1) {
            sum = sum + costs[i][0]
        }else {
            sum = sum + costs[i][1]
        }
    }
    console.log(sum)
};

let costs = [[10,10],[30,30],[400,400],[30,30]]
console.log(twoCitySchedCost(costs))