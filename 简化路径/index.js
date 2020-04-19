/**
 * 简化路径
 * https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1013/
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let parts = path.split("/");
    let partsLen = parts.length;
    let res = [];
    for(let i = 0; i < partsLen; i++) {
        let tmp = parts[i];
        if(!tmp || tmp === ".") continue;
        if(tmp === "..") {
            res.pop();
        } else {
            res.push(tmp);
        }
    }
    return "/" + res.join("/");
};

console.log(simplifyPath("/a/../../b/../c//.//"))