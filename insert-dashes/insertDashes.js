module.exports = function insertDashes(num) {
  // write your code in here
  let addDashes = num.toString()
    .split('')
    .reduce(function(previous, current){
      if(parseInt(previous)%2 === 0 && parseInt(current)%2 === 0 && parseInt(current) !== 0){
        return previous + '-' + current;
      } else {
        return previous + current;
      }
  })

  return addDashes;
}