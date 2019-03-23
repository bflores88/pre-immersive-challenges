module.exports = function countByMultiples(length, x) {
  var newArray = [];
  var iterations = length*x;
  
  for(var i=iterations; i>=x; i-=x){
    newArray.push(i);
  }
  newArray.reverse();
  return newArray;
}