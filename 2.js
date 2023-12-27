// Run this code in the browser console, just copy and paste it :) 

function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
  return [];  
}

const nums = [2, 7, 11, 15];
const target = 9;
const indices = twoSum(nums, target);
console.log("Indices of the two numbers that add up to", target, ":", indices);