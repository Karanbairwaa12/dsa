var maxPoints = function (points) {
	let m = points.length;
	let n = points[0].length;
    let prev = [...points[0]];
    let max = Math.max(...prev)
    for(let i =1;i<m;i++) {
        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);

        left[0] = prev[0]
        for(let l = 1;l < n;l++) {
            left[l] = Math.max(prev[l-1] -1, prev[l])
        }
        right[n-1] = prev[n-1]
        for(let r = n-2;r>=0;r--) {
            right[r] = Math.max(prev[r+1] -1, prev[r])
        }

        for(let j = 0;j<n;j++) {
            prev[j] = Math.max(left[j], right[j])
        }
    }

    max = Math.max(max, ...prev)
    return max;
};

let points = [
	[4, 3, 2, 1],
	[1, 4, 3, 0],
	[0, 0, 1, 5],
	[1, 5, 3, 4],
	[0, 3, 3, 4],
];
maxPoints(points);
