let getStairPath = function(n){
    if(n === 0) {
        return [""]
    }else if(n < 0) {
        return []
    }
           
    let path1 = getStairPath(n-1);
    let path2 = getStairPath(n-2)
    let path = []
    for(let val of path1) {
        path.push("1" + val);
    }
    for(let val of path2) {
        path.push("2" + val);
    }

    return path;
}

console.log(getStairPath(3))