/**
 * 合并区间
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1046/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const len = intervals.length;
    const sortSets = intervals.sort( ([l1], [l2])=> l1 - l2);
    const res = [];
    for (let i = 0; i < len; i++) {
        const [left, right] = sortSets[i];
        const resLen = res.length;
        let flag = false;
        for (let j = 0; j < resLen; j++) {
            const [resLeft, resRight] = res[j];
            if (left <= resLeft && right >= resLeft) {
                res[j][0] = left;
                flag = true;
            }
            if (right >= resRight && left <= resRight) {
                res[j][1] = right;
                flag = true;
            }
            if (left >= resLeft && right <= resRight) {
                flag = true;
            }
            if (flag) break;
        }
        if (!flag) {
            res.push([left, right]);
        }
    }
    return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))