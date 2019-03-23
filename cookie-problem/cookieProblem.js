module.exports = function cookieProblem(array) {
  var addCookies = 0;
  var mostCookies = 0;

  for(var i=0; i<array.length; i++){
    if(array[i] > mostCookies){
      mostCookies = array[i];
    }
  }

  array.forEach(function(elem){
    var cookieDiff = mostCookies - elem;
    addCookies+=cookieDiff;
  })

  return addCookies;
}