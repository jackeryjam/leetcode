/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str0 = strs[0];
    if(str0 == null) {
        return "";
    } 
    let commonLen = str0.length;
    strs.forEach(str => {
        let loopEnd = commonLen < str.length ? commonLen : str.length;
        let i = 0;
        while(i < loopEnd) {
            if(str0[i] !== str[i]) {
                break;
            }
            i++;
        }
        commonLen = i;
    });
    return str0.substr(0, commonLen);
};

console.log(longestCommonPrefix( ["flower","flow","flight"]))