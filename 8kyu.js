/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your taks is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. 

Example: n=5, m=5: 25
         n=-5, m=-5: 0 */


//My Solution
function paperwork(n, m) {
  let totalPages = n*m
  if (n < 0 || m < 0){
    return 0
  } else {
    return totalPages
  }
}

//Best Solution
function paperwork(n, m){
  return n > 0 && m > 0 ? n * m : 0
}

//Another Solution
function paperwork(n, m){
  if (m < 0 || n < 0){
    return 0;
  }
  return m * n
}


/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence.

Example: ['hello', 'world', 'this', 'is', 'great'] -> 'hello world this is great' */

smash = function (words) {
  return words.join(" ")
}

/* Give an array of integers your solution should find the smallest integer.
For example:
          -Given [34, 15, 88, 2] your solution will return 2
          -Given [34, -345, -1, 100] your solution will return -345

  You can assume, for the purpose of this kata, that the supplied array will not be empty. */

findSmallestInt(args) {
  return Math.min(...args)
}

/* Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0. 

Examples: countBy(1, 10) === [1,2,3,4,5,6,7,8,9,10]
          countBy(2, 5) === [2,4,6,8,10] */

function countBy(x, n) (
  let z = []
  for (i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z
)

