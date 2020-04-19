/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 */
function minSequeueLen(arr, n) {
    let arrLen = arr.length;
    if (arrLen === 0) return -1;
    let start = 0,
        minLen = 1,
        sum = arr[0];
    // 下一个为位置超过长度或者达到n
    while (start + minLen < arrLen && sum < n) {
        minLen++;
        // if(start + minLen - 1 >= arrLen) break;
        sum += arr[start + minLen - 1];
    }
    while (start + minLen - 1 < arrLen) {
        let tmp1 = arr[start],
            tmp2 = arr[start + minLen - 1];
        if (sum - tmp1 >= n) {
            start++;
            minLen--;
            sum -= tmp1;
        } else if (sum - tmp2 >= n) {
            minLen--;
            sum -= tmp2;
        } else {
            // 下一个为位置
            if (start + minLen >= arrLen) break;
            start++;
            sum = sum + arr[start + minLen - 1] - arr[start - 1];
        }
    }
    if (minLen === arrLen && sum < n) return -1;
    return minLen;
}

console.log(minSequeueLen([9,5,7,4,8,3,5,1,6], 1000));