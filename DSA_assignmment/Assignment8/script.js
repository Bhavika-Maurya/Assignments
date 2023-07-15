//1.

function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D array to store the lengths of LCS
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Calculate the lengths of LCS
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    const asciiSumS1 = s1.split('').reduce((sum, char) => sum + char.charCodeAt(), 0);
    const asciiSumS2 = s2.split('').reduce((sum, char) => sum + char.charCodeAt(), 0);
    const lowestASCIISum = asciiSumS1 + asciiSumS2 - 2 * dp[m][n];

    return lowestASCIISum;
}

//2.

function isValid(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else if (stack.length > 0 && stack[stack.length - 1] === '*') {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    let count = 0;
    while (stack.length > 0) {
        const top = stack.pop();
        if (top === '(') {
            count++;
        } else if (top === '*') {
            count--;
            if (count < 0) {
                count = 0;
            }
        }
    }

    return count === 0;
}

// 3.

function minSteps(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the LCS lengths
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill in the LCS lengths
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Calculate the minimum number of steps
    const lcsLength = dp[m][n];
    const steps = m + n - 2 * lcsLength;

    return steps;
}

//4.

class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left ?? null;
      this.right = right ?? null;
    }
  }
  
  function buildTree(s, start, end) {
    if (start > end) {
      return null;
    }
  
    let leftParenIndex = s.indexOf("(", start);
    if (leftParenIndex > end) {
      let val = parseInt(s.substring(start));
      return new TreeNode(val);
    }
  
    let val = parseInt(s.substring(start, leftParenIndex));
    let node = new TreeNode(val);
  
    let rightParenIndex = findClosingParenthesis(s, leftParenIndex);
    node.left = buildTree(s, leftParenIndex + 1, rightParenIndex - 1);
    node.right = buildTree(s, rightParenIndex + 2, end - 1);
  
    return node;
  }
  
  function findClosingParenthesis(s, start) {
    let count = 0;
    for (let i = start; i < s.length; i++) {
      if (s[i] === "(") {
        count++;
      } else if (s[i] === ")") {
        count--;
      }
      if (count === 0) {
        return i;
      }
    }
    return -1;
  }
  
  function constructTreeFromString(s) {
    return buildTree(s, 0, s.length - 1);
  }
  


//5.

function compress(chars) {
    let readPtr = 0;
    let writePtr = 0;
    let count = 1;
  
    for (let i = 1; i <= chars.length; i++) {
      if (i < chars.length && chars[i] === chars[i - 1]) {
        count++;
      } else {
        chars[writePtr] = chars[readPtr];
        writePtr++;
  
        if (count > 1) {
          let countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[writePtr] = countStr[j];
            writePtr++;
          }
        }
  
        count = 1;
        readPtr = i;
      }
    }
  
    return writePtr;
  }

  
  //6.

  function findAnagrams(s, p) {
    const pFreq = Array(26).fill(0);
    const windowFreq = Array(26).fill(0);
  
    for (let char of p) {
      const index = char.charCodeAt(0) - 97;
      pFreq[index]++;
    }
  
    const result = [];
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      const rightChar = s[right].charCodeAt(0) - 97;
      windowFreq[rightChar]++;
  
      if (right - left + 1 >= p.length) {
        if (arraysEqual(pFreq, windowFreq)) {
          result.push(left);
        }
  
        const leftChar = s[left].charCodeAt(0) - 97;
        windowFreq[leftChar]--;
        left++;
      }
  
      right++;
    }
  
    return result;
  }
  
  function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  
  //7

  function decodeString(s) {
    const stack = [];
  
    for (let char of s) {
      if (char === ']') {
        let substring = '';
        let repetitions = '';
  
        while (stack.length && stack[stack.length - 1] !== '[') {
          substring = stack.pop() + substring;
        }
  
        stack.pop(); // Pop the opening bracket '['
  
        while (
          stack.length &&
          stack[stack.length - 1] !== '[' &&
          !isNaN(parseInt(stack[stack.length - 1]))
        ) {
          repetitions = stack.pop() + repetitions;
        }
  
        substring = substring.repeat(parseInt(repetitions));
        stack.push(substring);
      } else {
        stack.push(char);
      }
    }
  
    return stack.join('');
  }

  //8.

  function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const mismatchIndices = [];
    const commonChars = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchIndices.push(i);
      } else {
        commonChars.push(s[i]);
      }
    }
  
    if (mismatchIndices.length !== 2) {
      return false;
    }
  
    const [i, j] = mismatchIndices;
    if (
      s[i] === goal[j] &&
      s[j] === goal[i] &&
      [...s].sort().join("") === [...goal].sort().join("")
    ) {
      return true;
    }
  
    return false;
  }
  



