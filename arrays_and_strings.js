function isUnique(word) {
  var unique = true;
  if (word.length <= 1) return true;
  word = word.split('');
  var wordHash = {};
  word.forEach((letter) => {
    if (!wordHash[letter]) {
      wordHash[letter] = true;
    } else {
      unique = false;
    }
  });
  return unique;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = [...str1];
  str2 = [...str2];
  str1 = str1.sort((a, b) => a.localeCompare(b));
  str2 = str2.sort((a, b) => a.localeCompare(b));
  str1 = str1.join('');
  str2 = str2.join('');
  return str1 === str2;
}

function URLify(inputStr) {
  const spaceEncode = '%20';
  inputStr = inputStr.trim().split('');
  inputStr.forEach((letter, index) => {
    if (letter === ' ') {
      inputStr[index] = spaceEncode;
    }
  });
  return inputStr.join('');
}

function palPerm(word) {
  word = word.toLowerCase();
  if (word.lenght <= 1) return true;
  var isPerm = true;
  word = word.split('');
  var wordHash = {};
  var letters = 0;
  word.forEach((letter) => {
    if (letter !== ' ') {
      letters += 1;
      if (!wordHash[letter]) wordHash[letter] = 1;
      else wordHash[letter] += 1;
    }
  });

  var canHaveSingle = letters % 2 === 1 ? true : false;
  Object.entries(wordHash).forEach(([letter, occ]) => {
    if (occ % 2 !== 0) {
      if (canHaveSingle) canHaveSingle = false;
      else isPerm = false;
    }
  });
  return isPerm;
}

function oneAway(word, editedWord) {
  var isOneAway = true;
  var diffFound = false;
  if (word === editedWord) return isOneAway;
  if (word.length === editedWord.length) {
    word.split('').forEach((l, i) => {
      if (l !== editedWord[i]) {
        if (!diffFound) diffFound = true;
        else isOneAway = false;
      }
    });
  } else if (
    word.length === editedWord.length + 1 ||
    word.length === editedWord.length - 1
  ) {
    var smallerWord = word.length < editedWord.length ? word : editedWord;
    var biggerWord = word.length > editedWord.length ? word : editedWord;
    var biggerPointer = 0;
    for (var i = 0; i < smallerWord.length; i++) {
      smallerLetter = smallerWord[i];
      biggerLetter = biggerWord[i + biggerPointer];

      if (smallerLetter !== biggerLetter) {
        if (!diffFound) {
          diffFound = true;
          biggerPointer += 1;
          i -= 1;
        } else {
          isOneAway = false;
        }
      }
    }
  } else {
    isOneAway = false;
  }
  return isOneAway;
}

function twoSum(numbers, target) {
    var uPointer = numbers.length - 1
    var lPointer = 0
    var lValue
    var uValue
    while (uPointer > lPointer) {
        uValue = numbers[uPointer]
        lValue = numbers[lPointer]
        var sum = uValue + lValue
        if (sum < target) lPointer += 1
        else if (sum > target) uPointer -= 1
        else return ([lPointer, uPointer])
    }
    return -1
}

/* console.log(isUnique('hh')) */
/* console.log(checkPermutation('hello', 'elloh')) */
/* console.log(URLify('Mr John Smith    ')) */
// console.log(palPerm('areare'))
// console.log(oneAway('v', 'ba'));
console.log(twoSum([2,3,5,6,9], 8))
