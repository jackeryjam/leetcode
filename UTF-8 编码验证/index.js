/**
 * UTF-8 编码验证
 * https://leetcode-cn.com/explore/interview/card/bytedance/247/bonus/1037/
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    let tmp = 0;
    for(let val of data){
        let str = val.toString(2);
        if (str.length === 8) {
            let res = /^1{1,4}(?=0)(?=.*$)/.exec(str);
            if (res == null || res.length !== 1) {
                return false;
            }

            let oneLen = res[0].length;
            if (oneLen === 1 && tmp > 0) {
                tmp--;
            } else if (oneLen > 1 && tmp === 0) {
                tmp = oneLen - 1;
            } else {
                return false;
            }

        } else {
            if (tmp !== 0) {
                return false;
            }
        }
    }
    if (tmp === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(validUtf8([240,162,138,147]))