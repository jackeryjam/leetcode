/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    function subStrPlus(str, start, length) {
        if (start + length > str.length) {
            return "256";
        }
        return str.substr(start, length);
    }

    let resList = [];
    let res = [];
    let len = s.length;
    function func(start) {
        let maybeStrList = [
            subStrPlus(s, start, 1),
            subStrPlus(s, start, 2),
            subStrPlus(s, start, 3)
        ].filter(val => val < 256 && !/^0\d{1,2}$/.test(val));

        // 递归终止条件
        if (res.length === 4) {
            if (start === len) {
                resList.push(res.join("."));
            }
            return;
        }
        if(maybeStrList.length === 0) {
            return;
        }

        maybeStrList.forEach(maybeStr => {
            res.push(maybeStr);
            func(start + maybeStr.length);
            res.pop();
        });
    }

    func(0);
    return resList;
};

console.log(restoreIpAddresses("010010"))