function findLargest(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let f_max = arr[0]
  let s_max = arr[0]
  let inx = 0
  for(let v = 0; v < arr.length;v++) {
    if(f_max < arr[v]) {
        s_max = f_max
        f_max = arr[v]
    }

    if(f_max > arr[v] && s_max < arr[v]) {
      s_max = arr[v]
    }
  }

  console.log(f_max, s_max, "working")
}

module.exports = {findLargest}