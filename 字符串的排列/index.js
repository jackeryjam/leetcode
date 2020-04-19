/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    function str2map(str, start, length) {
        let map = {};
        let endIndex = start + length;
        for(let i = start; i < endIndex; i++) {
            str_i_num = map[str[i]];
            map[str[i]] = str_i_num ? str_i_num + 1 : 1;
        }
        return map;
    }

    let len = s1.length;
    let s1Map = str2map(s1, 0, len);
    let s1MapLen = Object.keys(s1Map).length;
    function equalsS1(str, start) {
        let strMap = str2map(str, start, len);
        let strMapKeys = Object.keys(strMap);
        // 如果长度不相等，false
        if(s1MapLen !== strMapKeys.length) {
            return false;
        }
        return strMapKeys.every(key => s1Map[key] === strMap[key])
    }

    let s2len = s2.length;
    let loopEndIndex = s2len - len + 1;
    for(let i = 0; i < loopEndIndex; i++) {
        if(equalsS1(s2, i)) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion("ab", "eidboaoo"))