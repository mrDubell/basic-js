const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let winter = [11, 0, 1], spring = [2, 3, 4], summer = [5, 6 ,7], autumn = [8, 9,10];

  if (!date) {
  	return 'Unable to determine the time of year!';
  }
  if(date.getFullYear() == undefined || date.getMonth() > 11 || typeof date.toDateString() !== 'string'){
    throw new Error;
  }
  
  if(winter.includes(date.getMonth())){
    return 'winter';
  }
  if(spring.includes(date.getMonth())){
    return 'spring';
  }
  if(summer.includes(date.getMonth())){
    return 'summer';
  }
  if(autumn.includes(date.getMonth())){
    return 'autumn';
  }
  
};
