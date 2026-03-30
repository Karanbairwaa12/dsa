/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = Array.from({length: m}, () => Array(n).fill(-1));
    let findMax = function(i,j) {
        let l = -1;
        let r = -1;
        let max = -Infinity;
        if(i > 0 && grid[i-1][j] != 0 && grid[i-1][j] > max) {
            max = grid[i-1][j];
            l = i -1;
            r = j;
        }
        if(i < m-1 && grid[i+1][j] != 0 && grid[i+1][j] > max ) {
            max = grid[i+1][j];
            l = i+1;
            r = j;
        }
        if(j > 0 && grid[i][j-1] != 0 && grid[i][j-1] > max) {
            max = grid[i][j-1];
            l = i;
            r = j-1;
        }
        if(j < n-1 && grid[i][j+1] != 0 && grid[i][j+1] > max) {
            max = grid[i][j+1];
            l = i;
            r = j + 1;
        }
        return [l,r]
    }
    let travers = function(bag, i, j) {
        if(i < 0 || i >= m || j<0 || j>= n || grid[i][j] === 0 || visited[i][j] === 1) {
            return;
        }
        visited[i][j] = 1;
        bag.push(grid[i][j])
        let [maxI, maxJ] = findMax(i, j);

        if(maxI != -1 && maxJ != -1 && visited[maxI][maxJ] === -1) {
            travers(bag, maxI, maxJ);
        }
        visited[i][j] = -1
        // travers(bag, i, j+1);
        // travers(bag, i+1, j);
        // travers(bag, i, j-1);
        // travers(bag, i -1, j);
    }
    let max = 0;
    for(let i =0;i<m;i++) {
        for(let j =0;j<n;j++) {
            if(grid[i][j] !== 0 && visited[i][j] === -1) {
                let bag = []
                travers(bag, i, j)
                // console.log(bag)
                let sum =0;
                for(let val of bag) {
                    sum = sum + val;
                }
                if(sum > max) {
                    max = sum;
                }
                // console.log(sum, max)
            }
        }
    }
    return max;
};