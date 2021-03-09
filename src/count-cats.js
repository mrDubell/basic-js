module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let catsCounter = 0;
  let inRow = matrix.flat(Infinity);
  let ears = "^^";
  for (var i = 0; i < inRow.length; i++) {
        if (inRow[i] === ears) {
            catsCounter += 1;
        }
    }
    return catsCounter;

};

