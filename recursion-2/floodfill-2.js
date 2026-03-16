let image = [[0,0,0],[0,0,0]]
let sr = 0 
let sc = 0 
let color = 0
let lenX = image.length;
let lenY = image[0].length;
let dummy = Array.from({length: lenX}, () => Array(lenY).fill('b'))
let val = image[sr][sc]
console.log(image, dummy, lenX, lenY)
let floodFill = function (i, j) {
    if(image[i][j] !== val || dummy[i][j] === 'a') {
        return;
    }
    if(image[i][j] === val) {
        image[i][j] = color;
    }
    dummy[i][j] = 'a';
    if(i > 0) {
        floodFill(i-1, j);
    }
    if(i < lenX -1) {
        floodFill(i+1, j);
    }
    if(j > 0) {
        floodFill(i, j -1);
    }
    if(j < lenY -1) {
        floodFill(i, j + 1);
    }
}
floodFill(sr,sc)
console.log(image)