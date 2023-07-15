//1.

function isPowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
    
    while (n % 3 === 0) {
      n /= 3;
    }
    
    return n === 1;
  }
  
 
  //2
  function lastRemaining(n) {
    let leftToRight = true;
    let remaining = n;
    let step = 1;
    let head = 1;
  
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        head += step;
      }
  
      remaining = Math.floor(remaining / 2);
      step *= 2;
      leftToRight = !leftToRight;
    }
  
    return head;
  }
  


//3

function printSubsets(set, current = '', index = 0) {
    if (index === set.length) {
      console.log(current);
      return;
    }
  
    printSubsets(set, current, index + 1);
    printSubsets(set, current + set[index], index + 1);
  }
  

//4

function calculateLength(str) {
    if (str === '') {
      return 0;
    }
  
    return 1 + calculateLength(str.slice(1));
  }

  console.log(calculateLength('hello'));  // Output: 5
  console.log(calculateLength(''));       // Output: 0

//5

function countSubstrings(s) {
    let count = 0;
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
      // For each character, expand both left and right to check for palindromic substrings
      count += expandFromCenter(s, i, i);   // Odd-length substrings
      count += expandFromCenter(s, i, i+1); // Even-length substrings
    }
    
    return count;
  }
  
  function expandFromCenter(s, left, right) {
    let count = 0;
    
    // Expand the window while the characters at left and right are the same
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    
    return count;
  }
  
 
  console.log(countSubstrings('abc'));          // Output: 3
  console.log(countSubstrings('aaa'));          // Output: 6

  //6

  function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    let moves = 0;
    moves += towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
    moves++;
    moves += towerOfHanoi(n - 1, auxiliary, destination, source);
  
    return moves;
  }
  
  // Example usage
  const n = 3;
  const sourceRod = 1;
  const destinationRod = 3;
  const auxiliaryRod = 2;
  
  const totalMoves = towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod);
  console.log(`Total moves: ${totalMoves}`);

  
  //7

  function permute(str) {
    const result = [];
    const visited = new Array(str.length).fill(false);
    const current = [];
  
    backtrack(str, current, visited, result);
  
    return result;
  }
  
  function backtrack(str, current, visited, result) {
    if (current.length === str.length) {
      result.push(current.join(''));
      return;
    }
  
    for (let i = 0; i < str.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(str[i]);
        backtrack(str, current, visited, result);
        current.pop();
        visited[i] = false;
      }
    }
  }
  
  // Example usage
  const str = 'abb';
  const permutations = permute(str);
  console.log(permutations.join(' '));
  
  

//8

function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  const stri = 'Hello World';
  const consonantCount = countConsonants(stri);
  console.log(consonantCount);
  

  

  