module.exports = function findTheStrayValue(array) {
  // write your code in here
  let stray;
  
  for(let i=0; i<array.length; i++){
    if(array[i] !== stray && array[i] !== array[i+1]  &  array[i] !== array[i-1]){
      stray = array[i];
    }
  }

  return stray;
}