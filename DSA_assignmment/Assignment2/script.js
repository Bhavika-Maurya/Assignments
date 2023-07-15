//1.

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
  
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  

  //2

  function distributeCandies(candyType) {
    const maxEat = candyType.length / 2;
    const uniqueTypes = new Set(candyType);
  
    return Math.min(uniqueTypes.size, maxEat);
  }
  
  //3.


  function findLHS(nums) {
  const freqMap = new Map();
  let longestSubseq = 0;

  // Count the frequency of each number
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Calculate the length of the harmonious subsequence
  for (let [num, freq] of freqMap) {
    if (freqMap.has(num + 1)) {
      const subseqLength = freq + freqMap.get(num + 1);
      longestSubseq = Math.max(longestSubseq, subseqLength);
    }
  }

  return longestSubseq;
}

//4.

function canPlaceFlowers(flowerbed, n) {
    const length = flowerbed.length;
    let count = 0;
  
    for (let i = 0; i < length; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1;
        count++;
  
        if (count === n) {
          return true;
        }
      }
    }
  
    return false;
  }
  
//5. 

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
  
    // Compare product of three largest positive numbers
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  
    // Compare product of two smallest negative numbers with the largest positive number
    const option2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(option1, option2);
  }
  
 
  //6.


  function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

//7. 

function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        isIncreasing = false;
      }
      if (nums[i] > nums[i - 1]) {
        isDecreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  
//8.

function minDifference(nums, k) {
    const n = nums.length;
    if (n <= 4) {
      return 0; // If the array has 4 or fewer elements, the score is always 0
    }
  
    nums.sort((a, b) => a - b);
  
    let minScore = nums[n - 1] - nums[0];
  
    for (let i = 0; i <= 3; i++) {
      minScore = Math.min(minScore, nums[n - 1 - 3 + i] - nums[i]);
    }
  
    return Math.max(0, minScore - 2 * k);
  }
  

  

  