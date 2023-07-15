//1.

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          return target; // Exact sum found, return it
        }
      }
    }
  
    return closestSum;
  }
  

  //2

  function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const result = [];
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicates
        }
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum < target) {
            left++;
          } else if (sum > target) {
            right--;
          } else {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++; // Skip duplicates
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--; // Skip duplicates
            }
          }
        }
      }
    }
  
    return result;
  }
  
//3.

function nextPermutation(nums) {
    let i = nums.length - 2;

    // Find the first pair of adjacent elements in descending order
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Find the smallest element greater than nums[i] in the subarray nums[i+1:]
        let j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }

        // Swap nums[i] with nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the subarray nums[i+1:] to ensure it is sorted in ascending order
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

//4.

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

//5.

function plusOne(digits) {
    const n = digits.length;
    let carry = 1;

    for (let i = n - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;
}

//6.

function singleNumber(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
}

//7.

function findMissingRanges(nums, lower, upper) {
    const result = [];

    let start = lower;
    for (let num of nums) {
        if (num > start) {
            result.push(getRange(start, num - 1));
        }
        start = num + 1;
    }

    if (start <= upper) {
        result.push(getRange(start, upper));
    }

    return result;
}

function getRange(start, end) {
    if (start === end) {
        return `${start}`;
    } else {
        return `${start}->${end}`;
    }
}

//8. 

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }

    return true;
}










  
  