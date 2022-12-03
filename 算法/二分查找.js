function search(target, nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    let num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num < target) {
      // 目标值在右边
      left = mid + 1;
    } else {
      // 目标值在左边
      right = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
let result = search(7, arr);
