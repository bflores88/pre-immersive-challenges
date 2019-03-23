module.exports = function checkAscOrder(numArray) {
  for(var i=0; i<numArray.length; i++){
    if(numArray[i] < numArray[i+1]){
      return true;
    } else {
      return false;
    }
  }
}