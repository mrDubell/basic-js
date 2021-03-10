const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!sampleActivity || typeof sampleActivity !== 'string' || arguments.length === 0 || isNaN(+sampleActivity) == true || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
  	return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / (+sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  //return MODERN_ACTIVITY;

};
