/*
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * Example: 19 is a happy number
 * 1² + 9² = 82
 * 8² + 2² = 68
 * 6² + 8² = 100
 * 1² + 0² + 0² = 1
 *
 * Tags:
 *  - Hash Table
 *  - Math
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var map = {};
  while (map.hasOwnProperty(n) === false) {
    map[n] = true;

    var sum = 0;
    while (n > 0) {
      var r = n % 10;
      sum += r * r;
      n = (n - r) / 10;
    }
    n = sum;

    if (n === 1) return true;
  }

  return false;
};


// mocha testing
describe('Happy Number', function() {

  // https://en.wikipedia.org/wiki/Happy_number
  var HappyNumber = [
    1, 7, 10, 13, 19, 23, 28, 31, 32, 44,
    49, 68, 70, 79, 82, 86, 91, 94, 97, 100,
    103, 109, 129, 130, 133, 139, 167, 176, 188, 190,
    192, 193, 203, 208, 219, 226, 230, 236, 239, 262,
    263, 280, 291, 293, 301, 302, 310, 313, 319, 320,
    326, 329, 331, 338, 356, 362, 365, 367, 368, 376,
    379, 383, 386, 391, 392, 397, 404, 409, 440, 446,
    464, 469, 478, 487, 490, 496, 536, 556, 563, 565,
    566, 608, 617, 622, 623, 632, 635, 637, 638, 644,
    649, 653, 655, 656, 665, 671, 673, 680, 683, 694,
    700, 709, 716, 736, 739, 748, 761, 763, 784, 790,
    793, 802, 806, 818, 820, 833, 836, 847, 860, 863,
    874, 881, 888, 899, 901, 904, 907, 910, 912, 913,
    921, 923, 931, 932, 937, 940, 946, 964, 970, 973,
    989, 998, 1000
  ].reduce(function (map, n) {
    map[n] = true;
    return map;
  }, {});

  // default test case
  it('1 ~ 1000', function () {
    for (var n = 1; n <= 1000; n++) {
      var output = isHappy(n);
      var answer = HappyNumber.hasOwnProperty(n);

      if (output !== answer) {
        throw new Error(`Wrong Answer: isHappy(${n}) = ${output}, but expect anwser to be ${answer}`);
      }
    }
  });

});
