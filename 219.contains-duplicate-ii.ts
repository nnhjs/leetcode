/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const obj: {
    [index: string]: number[];
  } = {}
  let objDistinct = false;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(obj[n]) {
      const l = obj[n].length;
      objDistinct = true;
      if(i - obj[n][l-1] <= k) {
        return true;
      }
      obj[n].push(i)
    } else {
      obj[n] = [i];
    }
  }
  return false
};
// @lc code=end

