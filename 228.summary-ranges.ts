/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const resultArr: number[][] = [];
  let smallestArr: number[] = []

  if(nums.length === 0) return []
  
  smallestArr[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if(smallestArr[smallestArr.length-1] + 1 === nums[i]) {
      smallestArr.push(nums[i]);
    } else {
      resultArr.push(smallestArr)
      smallestArr = [nums[i]];
    } 
  }

  resultArr.push(smallestArr)

  const resultStr = resultArr.map(r => {
    if(r.length === 1) {
      return `${r[0]}`
    } else {
      return `${r[0]}->${r[r.length-1]}`
    }
  })

  return resultStr
};
// @lc code=end

