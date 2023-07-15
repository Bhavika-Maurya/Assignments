//1.

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sMap.has(sChar)) {
            if (sMap.get(sChar) !== tChar) {
                return false;
            }
        } else {
            sMap.set(sChar, tChar);
        }

        if (tMap.has(tChar)) {
            if (tMap.get(tChar) !== sChar) {
                return false;
            }
        } else {
            tMap.set(tChar, sChar);
        }
    }

    return true;
}

//2.

function isStrobogrammatic(num) {
    const strobogrammaticMap = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftDigit = num[left];
        const rightDigit = num[right];

        if (!strobogrammaticMap.hasOwnProperty(leftDigit) ||
            strobogrammaticMap[leftDigit] !== rightDigit) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

//3.

function addStrings(num1, num2) {
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry !== 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;

        result += (sum % 10).toString();
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result.split('').reverse().join('');
}


//4

function reverseWords(s) {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    return words.join(' ');
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//5.

function reverseStr(s, k) {
    const arr = Array.from(s);

    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k - 1, arr.length - 1);

        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    return arr.join('');
}

//6.

function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatenated = s + s;
    return concatenated.includes(goal);
}


//7.

function backspaceCompare(s, t) {
    function buildString(str) {
        const stack = [];
        for (let char of str) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    const processedS = buildString(s);
    const processedT = buildString(t);

    return processedS === processedT;
}

//8.

function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = (y1 - y0) / (x1 - x0);

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        const slope = (y - y0) / (x - x0);
        if (slope !== initialSlope) {
            return false;
        }
    }

    return true;
}









