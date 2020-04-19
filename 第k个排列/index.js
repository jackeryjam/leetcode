/**
 * 第k个排列
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1021/
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    k = k - 1;

    let fibeMap = {
        "1": 1,
        "0": 1
    }
    function fibe(n) {
        let tmp = fibeMap[n];
        return tmp ? tmp : n * fibe(n - 1);
    }

    let flags = "a".repeat(n).split("").map(() => false);

    const findNFalseIndex = n => {
        let len = flags.length;
        let i = 0;
        while (n) {
            if (flags[i] === false) {
                n--;
            }
            i++;
        }
        return i;
    }

    let res = [];

    // 存在还没搞定的继续
    while (flags.some(val => !val)) {
        let falseLen = flags.reduce((pv, nv) => !nv ? pv + 1 : pv, 0);
        let tmp = fibe(falseLen - 1);
        let index = Math.floor(k / tmp);
        let trueIndex = findNFalseIndex(index + 1);
        res.push(trueIndex);
        flags[trueIndex - 1] = true;
        k = k % tmp;
    }

    return res.join("")

};

console.log(getPermutation(3, 6))