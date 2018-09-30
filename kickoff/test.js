const arrayToSentence = sentenceArray => {
  let length = 0;
  let sentence = "";
  for (let i = 0; i < sentenceArray.length; i++) {
    length++;
    sentence += sentenceArray[i] + " ";
  }
  return {
    length,
    sentence
  };
};

console.log(arrayToSentence(["hello", "world", "test"]));
