//1.

function arraysIntersection(arr1, arr2, arr3) {
    const result = [];
    let p1 = 0; // Pointer for arr1
    let p2 = 0; // Pointer for arr2
    let p3 = 0; // Pointer for arr3

    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
            result.push(arr1[p1]);
            p1++;
            p2++;
            p3++;
        } else {
            // Increment the pointer pointing to the smallest value
            if (arr1[p1] <= arr2[p2] && arr1[p1] <= arr3[p3]) {
                p1++;
            } else if (arr2[p2] <= arr1[p1] && arr2[p2] <= arr3[p3]) {
                p2++;
            } else {
                p3++;
            }
        }
    }

    return result;
}

//2.

function arraysDistinct(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const distinctNums1 = [...set1].filter(num => !set2.has(num));
    const distinctNums2 = [...set2].filter(num => !set1.has(num));

    return [distinctNums1, distinctNums2];
}

// 3.

function transpose(matrix) {
    const m = matrix.length;    // Number of rows
    const n = matrix[0].length; // Number of columns

    const result = [];

    for (let j = 0; j < n; j++) {
        const newRow = [];
        for (let i = 0; i < m; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

//4.

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
}

//5.

function arrangeCoins(n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentSum = (mid * (mid + 1)) / 2;

        if (currentSum === n) {
            return mid;
        } else if (currentSum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

//6.
function sortedSquares(nums) {
    const squaredNums = nums.map(num => num * num);
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
}


//7.

function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;

    for (const op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }

    return minRow * minCol;
}

//8.

function shuffle(nums, n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
}









