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

//the runtime for this function is

//2. UNIQUE CHARACTERS



//3. PANGRAM SENTENCE

//4. LONGEST WORD