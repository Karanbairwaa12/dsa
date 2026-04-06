var lemonadeChange = function(bills) {
    console.log(bills)
    let map = {}
    let isSafe = true;
    for(let i =0;i<bills.length;i++) {
        console.log(map)
        if(bills[i] === 5) {
            map[bills[i]] = (map[bills[i]] || 0) + 1;
        }else if(bills[i] === 10) {
            if(!map[5] || map[5]<=0) {
                isSafe = false;
                
            }else {
                map[5] = (map[5] || 0) - 1;
                map[10] = (map[10] || 0) + 1;
            }
        }else {
            if((map[5] && map[10])) {
                map[5] = (map[5] || 0) - 1;
                map[10] = (map[10] || 0) -1;
            }else if((map[5] && map[5] >= 3)) {
                map[5] = (map[5] || 0) - 3;
            }else {
                isSafe = false;
                
            }
        }
    }
};
let bills = [5,5,10,10,20]
lemonadeChange(bills)