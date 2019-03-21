module.exports = function acceptableSequence(str) {
  var testFor = '+';

  for (var i= 0; i<str.length; i++){
    
    if(str[i] !== '+' && str[i] !== '=' ){

      if(str.charAt(i-1) === testFor && str.charAt(i+1) === testFor){
        return true
      } else { return false; }

    }

  }

}