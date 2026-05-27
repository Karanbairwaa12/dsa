// You are given a rows x cols matrix grid representing a field of cherries where grid[i][j] represents the number of cherries that you can collect from the (i, j) cell.

// You have two robots that can collect cherries for you:

// Robot #1 is located at the top-left corner (0, 0), and
// Robot #2 is located at the top-right corner (0, cols - 1).
// Return the maximum number of cherries collection using both robots by following the rules below:

// From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i + 1, j + 1).
// When any robot passes through a cell, It picks up all cherries, and the cell becomes an empty cell.
// When both robots stay in the same cell, only one takes the cherries.
// Both robots cannot move outside of the grid at any moment.
// Both robots should reach the bottom row in grid.

// Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
// Output: 24
// Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
// Output: 28

var cherryPickup = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));

    let x = 0;
    let y = n - 1;

    dp[0][x] = grid[0][x];
    dp[0][y] = grid[0][y];

    // helper function
    function moveRobot(row, pos, value) {
        let bestPos = pos;
        let best = -1;

        for (let d = -1; d <= 1; d++) {
            let newPos = pos + d;

            if (
                newPos >= 0 &&
                newPos < n &&
                dp[row + 1][newPos] === 0
            ) {
                if (grid[row + 1][newPos] > best) {
                    best = grid[row + 1][newPos];
                    bestPos = newPos;
                }
            }
        }

        dp[row + 1][bestPos] = value + grid[row + 1][bestPos];

        return bestPos;
    }

    for (let i = 0; i < m - 1; i++) {

        // move robot having smaller score first
        if (dp[i][x] <= dp[i][y]) {
            x = moveRobot(i, x, dp[i][x]);
            y = moveRobot(i, y, dp[i][y]);
        } else {
            y = moveRobot(i, y, dp[i][y]);
            x = moveRobot(i, x, dp[i][x]);
        }

 
    }
    return dp[m-1][x] + dp[m-1][y]
};

let grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
cherryPickup(grid);
