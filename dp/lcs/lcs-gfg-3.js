let s1 = "geeks";
let s2 = "geeksfor";
let s3 = "geeksforgeeks";
let l = s1.length;
let m = s2.length;
let n = s3.length;

let dp = Array.from({ length: l + 1 }, () =>
  Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1)),
);


const isEqual = function (st1, st2, st3) {
  return st1 == st2 && st2 === st3 && st3 === st1;
};
const findLCSOf3 = function (s1, s2, s3, n1, n2, n3) {
  if (n1 == 0 || n2 == 0 || n3 == 0) return 0;
  if(dp[n1][n2][n3] !== -1) return dp[n1][n2][n3]
  let val = 0;
  if (isEqual(s1[n1 - 1], s2[n2 - 1], s3[n3 - 1])) {
    val = 1 + findLCSOf3(s1, s2, s3, n1 - 1, n2 - 1, n3 - 1);
    dp[n1][n2][n3] = val;
    return val;
  }

  val = Math.max(
    findLCSOf3(s1, s2, s3, n1, n2, n3 - 1),
    findLCSOf3(s1, s2, s3, n1, n2 - 1, n3),
    findLCSOf3(s1, s2, s3, n1 - 1, n2, n3),
  );
  dp[n1][n2][n3] = val;
  return val;
};

console.log(findLCSOf3(s1, s2, s3, l, m, n));
