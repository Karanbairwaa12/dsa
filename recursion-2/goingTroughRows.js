let matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [4, 4, 4, 4], [3, 3, 3, 3]]

let goingThrough = function(row) {
    if(row >= matrix.length) {
        return;
    }

    for(let i =0;i<matrix[row].length;i++) {
        console.log(matrix[row][i], "row =", row)
    }
    row++;
    goingThrough(row)
}
goingThrough(0)

module.exports = {goingThrough}