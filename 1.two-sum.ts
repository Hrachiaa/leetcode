/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let index1 = 0
    let index2 = 0
    nums.forEach((a, b)=> {
        nums.forEach((c, d)=> {
            if(Number(a + c) === target && d > b){
                index1 = b
                index2 = d
            }
        })
    })
    return [index1, index2]
};
// @lc code=end

