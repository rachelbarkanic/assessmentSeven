//1. SUM ZERO
let array = [1, 2, 3, 4, 0, -4]
let target = 0

const sumfunc = (array, target) => {
let value = false
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) 
  if (i != j) {
      if (array[i] + array[j] === target) {
        value = true;
      } 
      }
    }
  return value
  }


console.log(sumfunc(array, target))

//the runtime of this function is O(n^2)

//2. UNIQUE CHARACTERS

const uniqueCharacters = (str) =>
{
     
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    return true;
}
 console.log(uniqueCharacters('lalala'))

 //the runtime of this function is O(n^2)

//3. PANGRAM SENTENCE

//4. LONGEST WORD

const findLongestWord = (str) => {
    let longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  console.log(findLongestWord("Hello, my name is Rachel"))

  //The runtime of this function is O(n)