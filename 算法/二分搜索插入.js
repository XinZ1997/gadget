function searchInsert(target, nums) {
  let left = 0,
    right = nums.length - 1;
  ans = nums.length;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    let num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

let arr = [1, 3, 5, 6];
let result = searchInsert(0, arr);
