var numJewelsInStones = function(jewels, stones) {
    // let set = new Set()
    // for(let i =0;i<jewels.length;i++) {
    //     set.add(jewels[i])
    // }
    // let count = 0;
    // for(let j =0;j<stones.length;j++) {
    //     if(set.has(stones[j])) {
    //         count++;
    //     }
    // }
    // console.log(count)
    // return count;
    let count = 0;
    for(let i =0;i<jewels.length;i++) {
        for(let j =0;j<stones.length;j++) {
            if(jewels[i] === stones[j]) {
                count++;
            }
        }
    }
    console.log(count)
}

numJewelsInStones("aA",  "aAAbbbb")

