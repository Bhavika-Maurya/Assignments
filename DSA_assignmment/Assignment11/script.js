//1

function mySqrt(x) {
    if (x < 2) {
      return x;
    }
  
    let left = 1;
    let right = Math.floor(x / 2);
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return right;
  }
  
  // Example usage
  console.log(mySqrt(4));  // Output: 2
  console.log(mySqrt(8));  // Output: 2
  console.log(mySqrt(9));  // Output: 3
  console.log(mySqrt(16)); // Output: 4

  //2

  function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  console.log(findPeakElement([1, 2, 3, 1]));         // Output: 2
  console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5

  //3

  function missingNumber(nums) {
    let missing = nums.length;
  
    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
    }
  
    return missing;
  }
  
  // Example usage
  console.log(missingNumber([3, 0, 1]));       // Output: 2
  console.log(missingNumber([0, 1, 2, 4, 5])); // Output: 3

  
//4

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    // Move slow pointer one step at a time and fast pointer two steps at a time
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Reset the fast pointer to the start and move both pointers at the same speed
    fast = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  
  // Example usage
  console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
  console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3

  
//5

function intersection(nums1, nums2) {
    // Create a set to store the unique elements of nums1
    const set = new Set(nums1);
  
    // Create an array to store the intersection elements
    const intersection = [];
  
    // Iterate over nums2 and check if each element exists in the set
    for (let num of nums2) {
      if (set.has(num)) {
        intersection.push(num);
        set.delete(num); // Remove the element from the set to avoid duplicates
      }
    }
  
    return intersection;
  }
  
  // Example usage
  console.log(intersection([1, 2, 2, 1], [2, 2, 3])); // Output: [2]
  console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

  
//6

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      // Check if the mid element is greater than the rightmost element
      if (nums[mid] > nums[right]) {
        // The pivot point is on the right side of mid
        left = mid + 1;
      } else {
        // The pivot point is on the left side of mid or mid itself
        right = mid;
      }
    }
  
    // The next element after the pivot point is the minimum element
    return nums[left];
  }
  
  // Example usage
  console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
  console.log(findMin([3, 4, 5, 1, 2])); // Output: 1

  //7

  function searchRange(nums, target) {
    const leftIndex = findIndex(nums, target, true);
    const rightIndex = findIndex(nums, target, false);
  
    return [leftIndex, rightIndex];
  }
  
  function findIndex(nums, target, leftmost) {
    let low = 0;
    let high = nums.length - 1;
    let index = -1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (nums[mid] > target || (leftmost && nums[mid] === target)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
  
      if (nums[mid] === target) {
        index = mid;
      }
    }
  
    return index;
  }
  
  // Example usage
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
  console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]


//8
function intersect(nums1, nums2) {
    const frequencyMap = new Map();
    const result = [];
  
    // Create frequency map for nums1
    for (const num of nums1) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Check intersection with nums2 and update frequency map
    for (const num of nums2) {
      if (frequencyMap.has(num)) {
        result.push(num);
        const frequency = frequencyMap.get(num);
        if (frequency === 1) {
          frequencyMap.delete(num);
        } else {
          frequencyMap.set(num, frequency - 1);
        }
      }
    }
  
    return result;
  }
  
  // Example usage
  console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
  

