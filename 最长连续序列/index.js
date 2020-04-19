/**
 * 最长连续序列
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1019/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let map = {};
    nums.forEach(val => map[val] = true);

    let len = 0;
    nums.forEach(key => {
        let tmp = key + 1;
        let tmpLen = 1;
        if (!map[key]) return;
        while (map[tmp]) {
            map[tmp] = false;
            tmpLen++;
            tmp++;
        }
        tmp = key - 1;
        while (map[tmp]) {
            map[tmp] = false;
            tmpLen++;
            tmp--;
        }
        map[key] = false;
        len = len > tmpLen ? len : tmpLen;
    })

    return len;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 0]))