//1.

function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
    
    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n = n / 2;
    }
    
    return true;
  }

  
  //2

  function sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2;
  }

console.log(sumOfFirstNNumbers(3));   // 6
console.log(sumOfFirstNNumbers(5));   // 15


//3.

function factorial(N) {
    let result = 1;
    for (let i = 2; i <= N; i++) {
      result *= i;
    }
    return result;
  }

  
  //4

  function calculateExponent(N, P) {
    return Math.pow(N, P);
  }

  
  //5
  function findMax(arr, start, end) {
    // Base case: If there is only one element in the array, return it
    if (start === end) {
      return arr[start];
    }
  
    // Divide the array into two halves and recursively find the maximum in each half
    const mid = Math.floor((start + end) / 2);
    const maxLeft = findMax(arr, start, mid);
    const maxRight = findMax(arr, mid + 1, end);
  
    // Compare the maximum of the left half and the right half, and return the larger one
    return Math.max(maxLeft, maxRight);
  }
  
  function findMaximum(arr) {
    return findMax(arr, 0, arr.length - 1);
  }

  //6.

  function findNthTerm(a, d, N) {
    var nthTerm = a + (N - 1) * d;
    return nthTerm;
  }
  
 
  //7.

  function permuteString(S) {
    var result = [];
    backtrack(S.split(""), 0, result);
    return result;
  }
  
  function backtrack(S, start, result) {
    if (start === S.length - 1) {
      result.push(S.join(""));
      return;
    }
  
    for (var i = start; i < S.length; i++) {
      swap(S, start, i);
      backtrack(S, start + 1, result);
      swap(S, start, i); // Backtrack by swapping back
    }
  }
  
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  //8.

  function productOfArray(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
  // Example usage
  console.log(productOfArray([1, 2, 3, 4, 5])); // Output: 120
  console.log(productOfArray([1, 6, 3]));       // Output: 18
  

  

