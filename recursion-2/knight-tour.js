var checkValidGrid = function (grid) {
    let matrix = Array.from({ length: grid.length }, () => Array(grid.length).fill(-1))
    let n = grid.length
    let isTrue = false;

    let isSame = function(arr) {
        let val =JSON.stringify(arr);
        let val2 =JSON.stringify(grid);
        return val === val2;
    }
    let recursion = function (row, col, count, path) {
        if (row < 0 || row >= n || col < 0 || col >= n || matrix[row][col] !== -1) {
            return;
        }else if(count === n*n-1) {
            matrix[row][col] = count
            if(isSame(matrix)) {
                console.log(matrix)
                isTrue = true;
            }
            matrix[row][col] = -1;
            return;
        }
        matrix[row][col] = count
        recursion(row - 2, col + 1, count + 1, path + row + "-" + col + ", ")
        recursion(row - 1, col + 2, count + 1, path + row + "-" + col + ", ")
        recursion(row + 1, col + 2, count + 1, path + row + "-" + col + ", ")
        recursion(row + 2, col + 1, count + 1, path + row + "-" + col + ", ")
        recursion(row + 2, col - 1, count + 1, path + row + "-" + col + ", ")
        recursion(row + 1, col - 2, count + 1, path + row + "-" + col + ", ")
        recursion(row - 1, col - 2, count + 1, path + row + "-" + col + ", ")
        recursion(row - 2, col - 1, count + 1, path + row + "-" + col + ", ")
        matrix[row][col] = -1;
    }
    recursion(0, 0, 0, "")
    return isTrue
};

checkValidGrid([[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]])