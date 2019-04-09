module.exports = function findTheLongestWord(sen) {
  // write your code in here
  let longestWord = '';
  for(let i=0; i<sen.length; i++){
    if(sen[i].length > longestWord.length){
      longestWord = sen[i];
    }
  }

  return longestWord;
}