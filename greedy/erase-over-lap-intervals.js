// var eraseOverlapIntervals = function(arr) {
//     // arr.sort((a, b) =>  {
//     //     if(a[0] === b[0]) {
//     //         return a[1] - b[1]
//     //     }
//     //     return a[0] - b[0] 
//     // })
// arr.sort((a, b) =>  {
//     if(a[1] === b[1]) {
//         return a[0] - b[0]
//     }
//     return a[1] - b[1] 
// })
//     console.log(arr)
//     let count =0;
//     let f = arr[0][0];
//     let l = arr[0][1];
//     for(let i =1;i<arr.length;i++) {
//         if(arr[i][0] >= l) {
//             l = arr[i][1];
//         }else {
//             count++;
//         }
//     }
//     console.log(count)
// };
var eraseOverlapIntervals = function (arr) {
    // arr.sort((a, b) =>  {
    //     if(a[0] === b[0]) {
    //         return a[1] - b[1]
    //     }
    //     return a[0] - b[0] 
    // })
    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })
    // console.log(arr)
    let count = 1;
    let f = arr[0][0];
    let l = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] >= l) {
            l = arr[i][1];
            count++;
        }
    }
    return arr.length - count;
};
eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])