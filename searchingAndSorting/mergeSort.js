const mergeTwoSortedArray = function (nums1, nums2) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] >= nums2[j]) {
            result.push(nums2[j])
            j++;
        } else {
            result.push(nums1[i])
            i++
        }
    }

    while (i < nums1.length) {
        result.push(nums1[i])
        i++;
    }

    while (j < nums1.length) {
        result.push(nums2[j])
        j++;
    }

    console.log(result)
}

// function merge(array, left, mid, right) {
//     let i, j, k;

//     // Size of left sublist
//     let size_left = mid - left + 1;

//     // Size of right sublist
//     let size_right = right - mid;

//     /* create temp arrays */
//     let Left = new Array(size_left);
//     let Right = new Array(size_right);

//     /* Copy data to temp arrays Left[] and Right[] */
//     for (i = 0; i < size_left; i++) {
//         Left[i] = array[left + i];
//     }

//     for (j = 0; j < size_right; j++) {
//         Right[j] = array[mid + 1 + j];
//     }

//     // Merge the temp arrays back into array[left..right]
//     i = 0; // Initial index of left subarray
//     j = 0; // Initial index of right subarray
//     k = left; // Initial index of merged subarray

//     while (i < size_left && j < size_right) {
//         if (Left[i] <= Right[j]) {
//             array[k] = Left[i];
//             i++;
//         } else {
//             array[k] = Right[j];
//             j++;
//         }
//         k++;
//     }

//     // Copy the remaining elements of Left[]
//     while (i < size_left) {
//         array[k] = Left[i];
//         i++;
//         k++;
//     }

//     // Copy the remaining elements of Right[]
//     while (j < size_right) {
//         array[k] = Right[j];
//         j++;
//         k++;
//     }
// }


const merge = function (nums, left, mid, right) {
    let i = 0;
    let j = 0;
    
    let size_left = mid - left + 1;
    let size_right = right - mid

    let arr1 = new Array(size_left)
    let arr2 = new Array(size_right)

    for (i = 0; i < size_left; i++) {
        arr1[i] = nums[left + i]
    }
    for (j = 0; j < size_right; j++) {
        arr2[j] = nums[mid + 1 + j]
    }
    i = 0;
    j = 0;
    let k = left;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            nums[k] = arr1[i]
            i++;

        } else {
            nums[k] = arr2[j]
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        nums[k] = arr1[i];
        i++;
        k++;
    }
    while (j < arr2.length) {
        nums[k] = arr2[j];
        j++;
        k++;
    }
}


const mergeSort = function (nums, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2)
        mergeSort(nums, left, mid)
        mergeSort(nums, mid + 1, right)

        return merge(nums, left, mid, right)
    }
}

const mergeSortFunction = function(nums) {
    mergeSort(nums, 0, 5)
    console.log(nums)
}   

mergeSortFunction([5, 8, 3, 9, 1, 2])