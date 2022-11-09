/*
 * @lc app=leetcode id=697 lang=typescript
 *
 * [697] Degree of an Array
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
    const map = new Map();
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!map.has(num)) {
            map.set(num, [1, i, i]);
        } else {
            const [count, start, end] = map.get(num);
            map.set(num, [count + 1, start, i]);
        }
        max = Math.max(max, map.get(num)[0]);
    }
    let min = nums.length;
    for (const [count, start, end] of map.values()) {
        if (count === max) {
            min = Math.min(min, end - start + 1);
        }
    }
    return min;
};
// @lc code=end

