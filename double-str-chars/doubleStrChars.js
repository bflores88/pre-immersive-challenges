module.exports = function doubleStrChars(str) {
  var newStr = '';

  if(typeof str !== 'string'){
    return 'not a string!';
  }

  for(var i=0; i<str.length; i++){
    var addToString = str[i] + str[i];
    newStr+=addToString;
  }
  
  return newStr;
}