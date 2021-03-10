const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
  	return 'Unable to determine the time of year!';
  }
  if(date.getFullYear == undefined || date.getMonth() > 11){
    throw new Error;
  }

};
