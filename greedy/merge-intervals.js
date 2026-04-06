var merge = function(arr) {
    arr.sort((a,b) => a[0] - b[0])
    console.log(arr)
    let md = []
    let f = arr[0][0]
    let l = arr[0][1]
    for(let i =1;i<arr.length;i++) {
        console.log(f, l)
        if(arr[i][0] > l) {
            l = Math.max(l, arr[i-1][1]);
            md.push([f, l]);
            f = arr[i][0];
            l = arr[i][1]
        }else {
            l = Math.max(l, arr[i][1])
        }
    }
    md.push([f, l])
    return md;
};

merge([[2,3],[4,5],[6,7],[8,9],[1,10]])