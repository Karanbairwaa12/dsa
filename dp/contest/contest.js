var maximumSaleItems = function(items, budget) {
    let n = items.length;
    let recursive = function(i,count, curr) {
        let val =0;
        for(let j = 0;j<n-1;j++) {
            if(item[(i+j)%n][1]%item[i][1] === 0) {
                val++;  
            }
        }
    }
    let val =0;
    for(let i =0;i<n;i++) {
        val = Math.max(val,recursive(i))
    }
};

const items = [[6,2],[2,6],[3,4]]
const budget = 9

maximumSaleItems(items, budget)