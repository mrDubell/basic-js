const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    
  let count = 1;

    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i]) === true){
        count++
        arr.flat(i)
      }
      
    }
    return count;
  }
};