module.exports = function findUniqueNum(strOfNums) {
  // write your code in here
  let unique;
  let numArr = strOfNums.split(' ').map(function(elem){
    return Number(elem);
  });

  for(let i=0; i<numArr.length; i++){
    if(numArr[i]%2 !== numArr[i+1]%2 && numArr[i]%2 !== numArr[i-1]%2 && numArr[i]%2 !== numArr[i-2]%2){
      unique = i;
    }
  }

  return unique;
}