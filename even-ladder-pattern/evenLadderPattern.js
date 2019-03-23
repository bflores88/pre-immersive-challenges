module.exports = function evenLadderPattern(num) {  
  var numStr = '';
  
  for(var i=2; i<=num; i+=2){
    var stringI = i.toString();
    var repeat = stringI.repeat(stringI);
    numStr = numStr.concat('\n' +repeat);

  }
  
  var minStr = numStr.substr(1);
  return minStr;

}