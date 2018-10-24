function turnWordIntoArray(wordString) {
  return wordString.split("");
}
function checkWordArrayForVowles(letterArray) {
  if (letterArray[0] === "a" || letterArray[0] === "e" || letterArray[0] === "i" || letterArray[0] === "o" || letterArray[0] === "u") {
    letterArray.push(letterArray[0], "w", "a", "y");
    // console.log("func1: " + letterArray);
    letterArray.shift(letterArray);
    console.log("func2: "  + letterArray);
  } else if (letterArray[0] === "y") {
    letterArray.push(letterArray[0], "a", "y");
    // console.log("func3: " + letterArray);
    letterArray.shift(letterArray);
    // console.log("func4: " + letterArray);
  }
  // else if (-1 !== letterArray.search(/qu/g)) {
  //   console.log("This word contains QU");
  // }
  else {
    letterArray.push(saveAllLettersBeforeFirstVowel(letterArray), "a", "y");
    // console.log("func5: " + letterArray);
    letterArray = killLettersbeforeFirstVowel(letterArray);
    console.log("func6: " + letterArray);
  }
  return letterArray;
  console.log("output of vowel check: " + letterArray);
}

function checkForFirstVowel(letterArray) {
  var tempWord = letterArray.join("");
  var cutOff = tempWord.search(/[.a.e.i.o.u.y]/g)
  return cutOff;
}

function killLettersbeforeFirstVowel(letterArray) {
  var cutOffIndex = checkForFirstVowel(letterArray);
  return [letterArray.slice(cutOffIndex)];
}

function saveAllLettersBeforeFirstVowel(letterArray) {
  var cutOffIndex = checkForFirstVowel(letterArray);
  var choppedOff = letterArray.slice(0,cutOffIndex);
  return choppedOff;
}

function checkForFirstVowelafterQU(letterArray) {
  var tempWord = letterArray.join("");
  var cutOff = tempWord.search(/[.a.e.i.o.y]/g)
  return cutOff;
}

function checkForQU(letterArray) {
  var tempWord = letterArray.join("");
  var cutOff = tempWord.search(/[.(qu)]/g)
  return cutOff;
}

function checkIfQuIsBeforeVowel(check4firstvowelafterq,check4qu) {
  if (check4qu < check4firstvowelafterq) {
    return 1
  } else { return 0
  }
}


$(document).ready(function() {
  $("form#englishForm").submit(function(event) {
    var englishSentenceArray = $("input#englishSentence").val();
    var workingArray = turnWordIntoArray(englishSentenceArray);
    console.log("The 1st vowel is located at index: " + checkForFirstVowel(workingArray));
    console.log("Word after slicing letters before 1st vowel: " + killLettersbeforeFirstVowel(workingArray));
    console.log("These are the sliced letters before the 1st vowel: " + saveAllLettersBeforeFirstVowel(workingArray));

    // console.log("1st: " + workingArray);

    var resultsArray = checkWordArrayForVowles(workingArray)
    resultsArray = resultsArray.join("");
    console.log("2nd: "+ resultsArray);

    $("span.pigLatin").text(resultsArray);

    $("#result").show();

    event.preventDefault();
  });
});
