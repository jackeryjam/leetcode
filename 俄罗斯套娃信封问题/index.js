/**
 * https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1031/
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let sortEnvs = envelopes.sort((a, b) => a[0] - b[0])
    sortEnvs.push([Math.max, Math.max])
    let len = sortEnvs.length;
    let maxLenArr = new Array(len);
    maxLenArr[0] = 1;
    for (let i = 1; i < len; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (sortEnvs[j][1] >= sortEnvs[i][1] || sortEnvs[j][0] >= sortEnvs[i][0]) {
                continue;
            }
            if (maxLenArr[j] > max) {
                max = maxLenArr[j]
            }
        }
        maxLenArr[i] = max + 1;
    }
    return maxLenArr[len - 1] - 1;
};

console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]))