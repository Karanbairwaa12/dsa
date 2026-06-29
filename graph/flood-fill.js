var floodFill = function (image, sr, sc, color) {
	let cc = image[sr][sc];
    let vis = Array.from({length: image.length}, () => Array(image[0].length).fill(0))
	let dfs = function (i, j, c) {
		if (i < 0 || j < 0 || i >= c.length || j >= c[0].length) return;

		if (c[i][j] == cc && vis[i][j] != 1) {
			console.log(i,j)
			c[i][j] = color;
            vis[i][j] = 1;
			dfs(i + 1, j, c);
			dfs(i - 1, j, c);
			dfs(i, j + 1, c);
			dfs(i, j - 1, c);
		}
	};

	dfs(sr, sc, image);
	return image;
};

var floodFillWithBfs = function(image, sr, sc, color) {
    if(image[sr][sc] == color) return image;

    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let old = image[sr][sc]
    let qu = []
  
    qu.push([sr, sc])
    image[sr][sc] = color
    while(qu.length > 0) {
        let [x, y] = qu.shift()

        for(let it of dir) {
            let nx = x + it[0]
            let ny = y + it[1]
            if(nx >= 0 && nx < image.length && ny >=0 && ny < image[0].length && image[nx][ny] == old) {
                qu.push([nx,ny])
                image[nx][ny] = color;
            }
        }
    }

    console.log(image)

}

let image = [[2,1,1],[0,1,1],[1,0,1]];
let sr = 1;
let sc = 1;
let color = 2;

// floodFill(image, sr, sc, color);
floodFillWithBfs(image, sr, sc, color);

