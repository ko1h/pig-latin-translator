function turnWordIntoArray(wordString) {
  return wordString.split("");
}
function checkWordArrayForVowles(letterArray) {
  console.log("func0: " + letterArray[0]);
  if (letterArray[0] === "a" || letterArray[0] === "e" || letterArray[0] === "i" || letterArray[0] === "o" || letterArray[0] === "u") {
    letterArray.push(letterArray[0], "w", "a", "y");
    console.log("func1: " + letterArray);
    letterArray.shift(letterArray);
    console.log("func2: "  + letterArray);
  } else if (letterArray[0] === "y") {
    letterArray.push(letterArray[0], "a", "y");
    console.log("func3: " + letterArray);
    letterArray.shift(letterArray);
    console.log("func4: " + letterArray);
  }
  return letterArray;
}

function checkForFirstVowel(letterArray) {
  var tempWord = letterArray.join("");
  var cutOff = tempWord.search(/[.a.e.i.o.u.y]/g)
  return cutOff;
}

function killLettersbeforeFirstVowel(letterArray) {
  var cutOffIndex = checkForFirstVowel(letterArray);
  return letterArray.slice(cutOffIndex);
}


$(document).ready(function() {
  $("form#englishForm").submit(function(event) {
    var englishSentenceArray = $("input#englishSentence").val();
    var workingArray = turnWordIntoArray(englishSentenceArray);
console.log("check1st vowel: " + checkForFirstVowel(workingArray));
console.log("trimmed: " + killLettersbeforeFirstVowel(workingArray));
console.log("1st: " + workingArray);

    var resultsArray = checkWordArrayForVowles(workingArray);

console.log("2nd: "+ resultsArray);

//LOGIC OCCURS HERE



    $("span.pigLatin").text(resultsArray);

    $("#result").show();

    event.preventDefault();
  });
});
