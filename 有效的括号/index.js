/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/901/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    let stack = []
    Array.prototype.top = function() {
        return this[this.length - 1];
    }
    s.split("").forEach(val => {
        let tmp = map[val];
        if(tmp == null) {
            stack.push(val)
        } else {
            if(stack.top() == tmp) {
                stack.pop()
            } else {
                stack.push(val)
            }
        }
    })
    return stack.length == 0;
};

console.log(isValid("([)]"))