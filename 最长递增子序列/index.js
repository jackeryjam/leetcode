/**
 * 
 * @param {Array<Number>} arr
 * @returns {Array<Number>}
 */
function lengthOfLIS(arr) {
    arr.push(Math.max);
    let len = arr.length;
    let lenArr = new Array(len),
        preArr = new Array(len);
    lenArr[0] = 1;
    preArr[0] = null;
    for (let i = 1; i < len; i++) {
        let max = 0, pre = null;
        for (let j = 0; j < i; j++) {
            if (arr[j] >= arr[i]) {
                continue;
            }
            if (lenArr[j] > max) {
                max = lenArr[j];
                pre = j;
            }
        }
        lenArr[i] = max + 1;
        preArr[i] = pre;
    }
    let p = preArr[len - 1], res = [];
    while (p != null) {
        res.push(arr[p]);
        p = preArr[p];
    }
    return res.reverse();
}
console.log(lengthOfLIS([1, 8, 2, 9, 3, 4, 5, 6]))