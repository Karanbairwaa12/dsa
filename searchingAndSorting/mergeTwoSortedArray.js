let nums1 = [3,5,8]
let nums2 = [1,2,3]

const mergeTwoSortedArray = function(nums1, nums2) {
    let result = []
    let i =0;
    let j =0;
    while(i<nums1.length && j < nums2.length) {
        if(nums1[i] >= nums2[j]) {
            result.push(nums2[j])
            j++;
        }else {
            result.push(nums1[i])
            i++
        }
    }

    while(i < nums1.length) {
        result.push(nums1[i])
        i++;
    }

    while(j < nums1.length) {
        result.push(nums2[j])
        j++;
    }

    console.log(result,Math.floor(0.5))
}



mergeTwoSortedArray(nums1, nums2)