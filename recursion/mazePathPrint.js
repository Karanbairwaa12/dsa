let mazPathStore = function(i,j,m,n) {
    if(i > m || j > n) {
        return [];
    }
    if(i === m && j === n) {
        return [""]
    }
    let path = []

    let right =  mazPathStore(i, j+1, m, n);
    let down =  mazPathStore(i+1,j, m, n);

    for(let item of right) {
        path.push("h" + item);
    }
    for(let item of down) {
        path.push("v" + item);
    }
    return path
}

let mazPathStoreWithDiagonal = function(i,j,m,n) {
    if(i > m || j > n) {
        return [];
    }
    if(i === m && j === n) {
        return [""]
    }
    let path = []

    let right =  mazPathStoreWithDiagonal(i, j+1, m, n);
    let down =  mazPathStoreWithDiagonal(i+1,j, m, n);
    let diagonal = mazPathStoreWithDiagonal(i+1, j+1, m, n)

    for(let item of right) {
        path.push("h" + item);
    }
    for(let item of down) {
        path.push("v" + item);
    }
    for(let item of diagonal) {
        path.push("d" + item);
    }
    return path
}
let mazPathPrint = function(i,j,m,n,path) {
    if(i > m || j > n) {
        return;
    }
    if(i === m && j === n) {
        console.log(path);
        return;
    }
    mazPathPrint(i, j+1, m, n, path + "h");
    mazPathPrint(i+1, j, m, n, path + "v");
}

let mazPathPrintDiagonal = function(i,j,m,n,path) {
    if(i > m || j > n) {
        return;
    }
    if(i === m && j === n) {
        console.log(path);
        return;
    }
    mazPathPrintDiagonal(i, j+1, m, n, path + "h");
    mazPathPrintDiagonal(i+1, j, m, n, path + "v");
    mazPathPrintDiagonal(i+1, j+1, m, n, path + "d")
}


mazPathPrintDiagonal(1,1,3,3,"")
console.log("fsdfsfdsagfdsgfdshgfds")
mazPathPrint(1,1,3,3,"")
console.log(mazPathStoreWithDiagonal(1, 1, 3,3))
console.log(mazPathStore(1,1,3,3))
