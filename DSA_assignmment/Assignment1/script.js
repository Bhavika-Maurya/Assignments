// 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}


//2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums, val) {
  let k = 0; // Counter for non-val elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move non-val element to the front
      k++;
    }
  }

  return k;
}


// 3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function searchInsert(nums, target) {
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

  return left; // Target not found, return the insertion index
}

//4.You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

function plusOne(digits) {
  const n = digits.length;

  // Add 1 to the least significant digit
  digits[n - 1] += 1;

  // Propagate carry if necessary
  let carry = 0;
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }

  // If there's still a carry, insert it as a new digit at the beginning
  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}



//5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively


function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}


//6.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true; // Duplicate found
    }
    set.add(num);
  }

  return false; // No duplicates found
}

// 7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

function moveZeroes(nums) {
  let left = 0; // Pointer for non-zero elements

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // Swap non-zero element to the front
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

// 8.You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

function findErrorNums(nums) {
  const n = nums.length;
  let xor = 0;
  let xorNums = 0;

  // Calculate xor of nums and consecutive integers
  for (let i = 0; i < n; i++) {
    xor ^= nums[i] ^ (i + 1);
    xorNums ^= nums[i];
  }

  // Find the rightmost set bit in xor
  const rightmostSetBit = xor & ~(xor - 1);

  let num1 = 0;
  let num2 = 0;

  // Separate nums into two groups based on the rightmost set bit
  for (let i = 0; i < n; i++) {
    if ((nums[i] & rightmostSetBit) !== 0) {
      num1 ^= nums[i];
    } else {
      num2 ^= nums[i];
    }
  }

  // Separate consecutive integers into two groups based on the rightmost set bit
  for (let i = 1; i <= n; i++) {
    if ((i & rightmostSetBit) !== 0) {
      num1 ^= i;
    } else {
      num2 ^= i;
    }
  }

  // Check which number is missing
  for (let num of nums) {
    if (num === num1) {
      return [num1, num2];
    }
  }

  return [num2, num1];
}

