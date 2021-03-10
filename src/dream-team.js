const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!members || arguments.length === 0) {
  	return false;
  }
  let newArr = [], str = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      newArr.push(members[i].toUpperCase().trim());
    }
  }
  newArr.sort();
  for(let q = 0; q < newArr.length; q++){
    str += newArr[q][0];
  }
  return str;
};
