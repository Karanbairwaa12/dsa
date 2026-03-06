var nextGreaterElements = function (nums) {
	// let st = [];
	// let ans = new Array(nums.length).fill(-1);
	// let len = nums.length;
	// for (let i = 0; i < len - 1; i++) {
	// 	let last = nums[len - 1];
	// 	if (nums[i] > last) {
	// 		ans[len - 1] = nums[i];
	// 		break;
	// 	}
	// }
	// st.push(nums[len - 1]);

	// for (let i = len - 2; i >= 0; i--) {
	// 	if (nums[i] < st[st.length - 1]) {
	// 		ans[i] = st[st.length - 1];
	// 		st.push(nums[i]);
	// 	} else {
	// 		while (st.length) {
	// 			if (nums[i] >= st[st.length - 1]) {
	// 				st.pop();
	// 			} else {
	// 				ans[i] = st[st.length - 1];
	// 				st.push(nums[i]);
	// 				break;
	// 			}
	// 		}

	// 		if (st.length === 0) {
	// 			for (let j = 0; j < i; j++) {
	// 				if (nums[j] > nums[i]) {
	// 					ans[i] = nums[j];
	// 					break;
	// 				}
	// 			}
	// 			st.push(nums[i]);
	// 		}
	// 	}
	// }
    // console.log(ans)
	// return ans;


    // let n = nums.length
    // nums = [...nums, ...nums];
	// let st = [];
	// let ans = new Array(nums.length).fill(-1);
	// let len = nums.length;
	// // for (let i = 0; i < len - 1; i++) {
	// // 	let last = nums[len - 1];
	// // 	if (nums[i] > last) {
	// // 		ans[len - 1] = nums[i];
	// // 		break;
	// // 	}
	// // }
	// st.push(nums[len - 1]);

	// for (let i = len - 2; i >= 0; i--) {
	// 	if (nums[i] < st[st.length - 1]) {
	// 		ans[i] = st[st.length - 1];
	// 		st.push(nums[i]);
	// 	} else {
	// 		while (st.length) {
	// 			if (nums[i] >= st[st.length - 1]) {
	// 				st.pop();
	// 			} else {
	// 				ans[i] = st[st.length - 1];
	// 				st.push(nums[i]);
	// 				break;
	// 			}
	// 		}

	// 		if (st.length === 0) {
	// 			// for (let j = 0; j < i; j++) {
	// 			// 	if (nums[j] > nums[i]) {
	// 			// 		ans[i] = nums[j];
	// 			// 		break;
	// 			// 	}
	// 			// }
	// 			st.push(nums[i]);
	// 		}
	// 	}
	// }
    // console.log(ans.slice(0,n))
	// return ans.slice(0,n);


    let st = [];
	let ans = new Array(nums.length).fill(-1);
	let len = nums.length;
	st.push(nums[len - 1]);

	for (let i = (2*len) - 2; i >= 0; i--) {
		if (nums[i%len] < st[st.length - 1]) {
			ans[i%len] = st[st.length - 1];
			st.push(nums[i%len]);
		} else {
			while (st.length) {
				if (nums[i%len] >= st[st.length - 1]) {
					st.pop();
				} else {
					ans[i%len] = st[st.length - 1];
					st.push(nums[i%len]);
					break;
				}
			}

			if (st.length === 0) {
				st.push(nums[i%len]);
			}
		}
	}
    console.log(ans)
	return ans;
};

nextGreaterElements([1, 5, 0, 3, 4, 9, 2, 6, 8]);
