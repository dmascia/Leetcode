/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let curr = 0; curr < nums.length; curr++) { // 0 1 2
        const neededNum = target - nums[curr]; // 7 2

        for (let next = (curr + 1); next < nums.length; next++) { // 1 2
            const currentNum = nums[next]; // 7 11
            const isTarget = currentNum === neededNum; // true false

            if (isTarget) return [curr, next] // [0, 1]
        }
    }

    return [-1, -1]
};


console.log("output: " + twoSum([2,7,11,15], 9) + " Expected: [0,1]")

