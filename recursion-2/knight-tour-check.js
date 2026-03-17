var checkValidGrid = function (grid) {
    // the question will tell you that if night always start form begning or not
    let row = -1;
    let col = -1;
    let n = grid.length
    for(let i =0;i<grid.length;i++) {
        for(let j =0;j<grid.length;j++) {
            if(grid[i][j] === 0) {
                row = i;
                col = j;
            }
        }
    }
    if(row === -1 || col === -1) return false;
    for(let count = 1;count < n*n;count++) {
        if(row-2 >= 0 && col+1 < grid.length && grid[row-2][col+1] === count) {
            row = row-2;
            col = col + 1;
            continue;
        }
        if(row-1 >= 0 && col+2 < grid.length && grid[row-1][col+2] === count) {
            row = row-1;
            col = col + 2;
            continue;
        }
        if(row+1 <grid.length && col+2 < grid.length && grid[row+1][col+2] === count) {
            row = row+1;
            col = col+2;
            continue;
        }
        if(row+2 <grid.length && col+1 < grid.length && grid[row+2][col+1] === count) {
            row = row+2;
            col = col+1;
            continue;
        }
        if(row+2 <grid.length && col-1 >= 0 && grid[row+2][col-1] === count) {
            row = row+2;
            col = col-1;
            continue;
        }
        if(row+1 <grid.length && col-2 >= 0 && grid[row+1][col-2] === count) {
            row = row+1;
            col = col-2;
            continue;
        }
        if(row-1 >= 0 && col-2 >= 0 && grid[row-1][col-2] === count) {
            row = row-1;
            col = col-2;
            continue;
        }
        if(row-2 >= 0 && col-1 >= 0 && grid[row-2][col-1] === count) {
            row = row-2;
            col = col-1;
            continue;
        }
        return false;
    }
    return true;
    
};
// let arr = [[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]]
let arr = [[24,11,22,17,4],[21,16,5,12,9],[6,23,10,3,18],[15,20,1,8,13],[0,7,14,19,2]]
console.log(checkValidGrid(arr))