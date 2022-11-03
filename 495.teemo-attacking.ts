/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalPoisonTime = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    const t1 = timeSeries[i];
    const t2 = timeSeries[i+1];
    if (t2 - t1 >= duration) {
      totalPoisonTime += duration
    } else {
      totalPoisonTime += t2 - t1;
    }
  }
  // Last attack
  totalPoisonTime += duration;
  
  return totalPoisonTime;
};
// @lc code=end

