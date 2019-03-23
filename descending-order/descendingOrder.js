module.exports = function descendingOrder(number) {
  if(typeof number !== 'number'){
    return 'not a number!';
  }

  var toStr = number.toString();
  var newArr = toStr.split('');
  var mutate = newArr.sort().reverse().join('');
  return mutate;

}