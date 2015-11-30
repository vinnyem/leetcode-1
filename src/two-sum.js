/*
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 *
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Tags:
 *  - Array
 *  - Hash Table
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {}; // key = {number}, value = {index}

  for (var index = 0; index < nums.length; index++) {
    var number = nums[index];

    // check prevIndex is exist or not
    var prevIndex = map[target - number];
    if (typeof prevIndex === 'number') {
      return [
        prevIndex + 1,
        index + 1
      ];
    }

    map[number] = index;
  }
};

// mocha testing
var expect = require('chai').expect;
describe('Two Sum', function() {

  // default testing example
  it('nums = [2, 7, 11, 15], target = 9', function () {
    var input = {
      nums: [2, 7, 11, 15],
      target: 9
    };
    var output = twoSum(input.nums, input.target);

    expect(output).to.deep.equal([1, 2]);
  });

  it('nums = [3, 2, 4], target = 6', function () {
    var input = {
      nums: [3, 2, 4],
      target: 6
    };
    var output = twoSum(input.nums, input.target);

    expect(output).to.deep.equal([2, 3]);
  });
});