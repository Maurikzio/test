//1 getRandomArray(length, min, max)
const generateRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const getRandomArray = (length, min = 1, max = 5) => {
  // return Array.from(new Array(length), () => generateRandomNumber(min, max));
  return Array(length).fill().map(() => generateRandomNumber(min, max));
}
// console.log(getRandomArray(6));


//2 getModa(...numbers)
const  chunkArray = theArray => {
  let inChunks = [];
  while (theArray.length) {
    inChunks.push(theArray.splice(0, theArray.lastIndexOf(theArray[0]) + 1));
  }
  return inChunks;
};

const itemLengthEqualTo = number =>{
  return item => item.length === number;
};

const getModa = (...numbers) => {
  const arrSorted = numbers.sort((a, b) => a - b);
                      //.filter((val, _, array) => array.indexOf(val) !== array.lastIndexOf(val));
  const anyRepetition = arrSorted.some((el, _, array) => array.indexOf(el) !== array.lastIndexOf(el));
  
  if(!anyRepetition) return null;
  
  const allChunks = chunkArray(arrSorted.slice()); 
  const maxLength = allChunks.reduce((acc, chunk) => acc.length > chunk.length ? acc : chunk, []).length;
  const allChunksWithSameFreq = allChunks.every(itemLengthEqualTo(maxLength));
  const chunksWithSameLength = allChunks.filter(itemLengthEqualTo(maxLength)).map(item => item[0]);

  return (allChunksWithSameFreq) ? null : chunksWithSameLength;
};
/*
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); //2
console.log(getModa(1, 2, 3, 4, 5)); //no moda todos la misma freq, null
console.log(getModa(1, 1, 2, 2, 3, 3, 4, 4, 5, 5)); // no moda , todos la misma freq, null
console.log(getModa(2, 3, 3, 4, 4, 4, 5, 5));  //4
console.log(getModa(1, 1, 1, 4, 4, 5, 5, 5, 7, 8, 9, 9, 9)); //1,5,9
console.log(getModa(2, 2, 3, 3, 6, 6, 9, 9)); // no moda, todos la misma freq, null
console.log(getModa(1, 2, 2, 3, 3)); //2,3
console.log(getModa(1, 2)); //no moda all same freq, null
console.log(getModa(19, 8, 29, 35, 19, 28, 15)); //19 */

//3 getAverage(...numbers)
const getAverage = (...numbers) => numbers.reduce((acc,num) => acc + num) / numbers.length;
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getAverage(3, 7, 5, 13, 20, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29));
// console.log(getAverage(3, -7, 5, 13, -2));

//4 getMedian(...numbers)
const getMedian = (...numbers) => {
  const sortedArray = numbers.sort((prev, curr) => prev - curr);
  const midPoint = sortedArray.length / 2;
  const median = (sortedArray.length % 2 === 0) 
                ? (sortedArray[midPoint-1] + sortedArray[midPoint]) / 2
                : sortedArray[Math.floor(midPoint)];
  
  return median;
};
// console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getMedian(1, 2, 3, 4));
// console.log(getMedian(1, 2, 3, 4, 5));

//5 filterEvenNumbers(...numbers)
const justOdds = number => number % 2 !== 0;
const filterEvenNumbers = (...numbers) => numbers.filter(justOdds);
// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6 countPositiveNumbers(...numbers)
const isPositive = number => number > 0;
const countPositiveNumbers = (...numbers) => numbers.filter(isPositive).length;
// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//7 getDividedByFive(...numbers)
const divisibleBy = number => item => item % number == 0;

// const divisibleByFive = divisibleBy(5);
const getDividedByFive = (...numbers) => numbers.filter(divisibleBy(5));
// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//8 replaceBadWords(string)
const replaceBadWords = sentence => {
  const badWords = ['fuck', 'shit'];
  const customRegExp = new RegExp(badWords.join('|'), 'gi');
  return sentence.split(customRegExp).join('****');
}
// console.log(replaceBadWords("Are you fucking kidding?"));
// console.log(replaceBadWords("Holy shit!")); 
// console.log(replaceBadWords("It's bullshit!"));
// console.log(replaceBadWords("Fucking shitty this fuck bullshit"));


//9 divideByThree(word)
const divideByThree = word => {
  const wordDivided = word.toLowerCase().split('')
                          .map((value, index) => (index % 3 === 0) ? value = ' ' + value : value).join('')
                          .trim()
                          .split(' ');

  return word.length < 3 ? word : wordDivided;
}
// console.log(divideByThree('Commander'));
// console.log(divideByThree('Live'));
// console.log(divideByThree('ab'));

//10 generateCombinations(word)
const getFactorial = number => (number < 2) ? 1 : number * getFactorial(number - 1);

//length = 2! ->1x2 -> 2 combinations
//length = 3! ->1x2x3 -> 6 combinations
//length = 4! -> 1x2x3x4 -> 24 combinations
const generateUniqueCombination = length => {
  let combination = new Set();
  while (true) {
    if (combination.size === length) break;
    let value = generateRandomNumber(0, length - 1);
    if (combination.has(value)) continue;
    combination.add(value);
  }
  return [...combination].join('');
}

const generateCombinations = word => {
  let combinations = new Set();
  while (true) {
    if (combinations.size === getFactorial(word.length)) break;
    let value = generateUniqueCombination(word.length);
    if (combinations.has(value)) continue;
    combinations.add(value);
  }
  return [...combinations].map(comb => comb.split('').map(element => word[element]).join(''));
}

// console.log(generateCombinations('man'));




const  chunkArraya = theArray => {
  let inChunks = [];
  while (theArray.length) {
    inChunks.push(theArray.splice(0, theArray.lastIndexOf(theArray[0]) + 1));
  }
  return inChunks;
};
console.log(chunkArraya([2, 3, 3, 4, 4, 4, 5, 5]));

const getMod = (...numbers) => {
  
  const arrSorted = numbers.sort((a, b) => a - b).filter(num => Number.isInteger(num));
  const anyRepetition = arrSorted.some((el, _, array) => array.indexOf(el) !== array.lastIndexOf(el));
  
  

  if(!anyRepetition) return null;

  return anyRepetition;
}

console.log(getMod(2, 3, 3, 4, 4, 5, 5)); 
console.log(getMod(2, 3, 3, 4, 4, 5, 5)); 

const tt = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const justReps = tt.filter((num, _, arr) => arr.indexOf(num) !== arr.lastIndexOf(num));
console.log(justReps);

