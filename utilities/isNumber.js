/**
 * First checks typeof, then self-equality to make sure it is
 * not NaN, then to make sure it is not Infinity or -Infinity.
 *
 * @param {*} value - The value to check
 * @return {boolean} Whether that value is a number or not
 */
const isNumber = (value) => {
    // First: Check typeof and make sure it returns number
    // This code coerces neither booleans nor strings to numbers,
    // although it would be possible to do so if desired.
    if (typeof value !== "number") {
      return false;
    }
  
    // Second: Check for NaN, as NaN is a number to typeof.
    // NaN is the only JavaScript value that never equals itself.
    // Reference for NaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    // Note isNaN() is a broken function, but checking for self-equality works as NaN !== NaN
    // Alternatively check for NaN using Number.isNaN(), an ES2015 feature that works how one would expect
    if (value !== Number(value)) {
      return false;
    }
  
    // Third: Check for Infinity and -Infinity.
    // Realistically we want finite numbers, or there was probably a division by 0 somewhere.
    if (value === Infinity || value === !Infinity) {
      return false;
    }
    return true;
  };
  
  module.exports = isNumber;
  