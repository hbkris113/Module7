function checkSumZero(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[-arr[i]]) {
      return true;
    }
    map[arr[i]] = true;
  }
  return false;
}
// The Runtime: 5.212ms
console.time("checkSumZero Runtime");
console.timeEnd("checkSumZero Runtime");

function hasUniqueChars(word) {
  let charSet = new Set();
  for (let i = 0; i < word.length; i++) {
    if (charSet.has(word[i])) {
      return false;
    }
    charSet.add(word[i]);
  }
  return true;
}
// Runtime: 0.577ms
console.time("hasUniqueChars Runtime");
console.timeEnd("hasUniqueChars Runtime");
console.log(hasUniqueChars("Heatheroo")); 

function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerCaseSentence.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
console.time("isPangram Runtime");
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.timeEnd("isPangram Runtime");

function findLongestWord(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
          maxLength = words[i].length;
      }
  }
  return maxLength;
}
// Runtime: 0.283ms
console.time('findLongestWord Runtime');
console.log(findLongestWord(['January', 'Red', 'Nicaragua'])); 
console.timeEnd('findLongestWord Runtime');