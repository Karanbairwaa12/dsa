let traverseKnight = function(n) {
    let matrix = Array.from({length:n}, () => Array(n).fill(-1));
    console.log(matrix)
    let m = matrix.length;
    let k = matrix[0].length;
    let count  = 0;
    let traverse = function(i,j, path) {
        // console.log(i, j)
        if(i < 0 || i >= m || j < 0 || j >= k || matrix[i][j] !== -1) {
            return;
        }else if(count === n*n-1) {
            // console.log(path);
            matrix[i][j] = count;
            console.log(matrix)
            matrix[i][j] = -1;
            return;
        }

        
        matrix[i][j] = count;
        count++;
        traverse(i -2, j+1, path + i + "-" + j + ", ")
        traverse(i-1, j+2, path + i + "-" + j + ", ")
        traverse(i+1, j+2, path + i + "-" + j + ", ")
        traverse(i+2, j+1, path + i + "-" + j + ", ")
        traverse(i +2, j-1, path + i + "-" + j + ", ")
        traverse(i+1, j-2, path + i + "-" + j + ", ")
        traverse(i-1, j-2, path + i + "-" + j + ", ")
        traverse(i-2, j-1, path + i + "-" + j + ", ")
        matrix[i][j] = -1
        count--;

    }
    traverse(0,0, "")
    console.log("hi")
}

traverseKnight(5)