const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let catsCounter = 0, inRow = matrix.flat(Infinity), ears = "^^";
  for (var i = 0; i < inRow.length; i++) {
    if (inRow[i] === ears) {
      catsCounter += 1;
      }
    }
  return catsCounter;
};



