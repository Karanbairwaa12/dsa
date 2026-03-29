let arr = [10, 20, 30, 40, 50]

let getPath = function () {
    let recursion = function (i, path, val, tar) {
        if (i === arr.length) {
            if (val === tar) {
                console.log(path);
                // return;
            }
            return;
        }

        recursion(i + 1, path, val, tar);
        recursion(i + 1, path + arr[i] + ",", val + arr[i], tar)


    }
    recursion(0, "", 0, 60)
}
getPath()