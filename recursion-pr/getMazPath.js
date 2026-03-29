let matrix = Array({ length: 3 }, () => Array(3).fill(0));
let getMazPath = function (i, j, path, m, n) {
    if (i === m - 1 && j === n - 1) {
        console.log(path);
        return;
    }
    if (j < m - 1) {
        getMazPath(i, j + 1, path + 'h', m, n);
    }
    if (i < n - 1) {
        getMazPath(i + 1, j, path + "v", m, n);
    }
    if (j < m -1 && i < n - 1) {
        getMazPath(i + 1, j+1, path + "d", m, n);
    }
}
getMazPath(0, 0, "", 3, 3)