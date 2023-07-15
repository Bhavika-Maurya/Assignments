//1.
function construct2DArray(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    const result = [];
    let index = 0;

    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(original[index]);
            index++;
        }
        result.push(row);
    }

    return result;
}

//2.

function arrangeCoins(n) {
    let completeRows = 0;
    let coinsLeft = n;

    for (let i = 1; i <= n; i++) {
        if (coinsLeft < i) {
            break;
        }

        coinsLeft -= i;
        completeRows++;
    }

    return completeRows;
}

//3.

function sortedSquares(nums) {
    const result = [];

    for (let num of nums) {
        result.push(num * num);
    }

    return result.sort((a, b) => a - b);
}


//4.

function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const distinctInNums1 = Array.from(set1).filter(num => !set2.has(num));
    const distinctInNums2 = Array.from(set2).filter(num => !set1.has(num));

    return [distinctInNums1, distinctInNums2];
}

//5.

function findDistanceValue(arr1, arr2, d) {
    let distance = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        let isValid = true;
        
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            distance++;
        }
    }
    
    return distance;
}

//6.

function findDuplicates(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    
    return duplicates;
}


//7.

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left];
}

//8.

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    
    const original = [];
    const seen = new Set();
    
    // Sort the changed array in ascending order
    changed.sort((a, b) => a - b);
    
    for (let i = 0; i < changed.length; i++) {
        const doubled = changed[i];
        const originalNum = doubled / 2;
        
        if (seen.has(originalNum)) {
            seen.delete(originalNum);
            original.push(originalNum);
        } else {
            seen.add(doubled);
        }
    }
    
    if (original.length !== changed.length / 2) {
        return [];
    }
    
    return original;
}










