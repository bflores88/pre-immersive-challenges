module.exports = function findMiddleValue(numArray) {
  // write your code in here
  const maximum = Math.max(...numArray);
  const minimum = Math.min(...numArray);
  
  for(let i=0; i<numArray.length; i++){
    if(numArray[i] !== maximum && numArray[i] !== minimum){
      return numArray.indexOf(numArray[i]);
    }
  }
}