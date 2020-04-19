/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    var monster = (function () {
        let stack = [];
        let len = 0;
        let top = null;
        return {
            init() {
                stack = [];
                len = 0;
                top = null;
            },
            feed(s) {
                if (len == 0) {
                    top = s;
                    len++;
                    stack.push(s);
                } else if (top == s) {
                    stack.pop();
                    len--;
                    top = stack[len - 1];
                } else {
                    stack.push(s);
                    len++;
                    top = s;
                }
            },
            output: () => stack.join("")
        }
    }())

    let len = S.length;
    for (let i = 0; i < len; i++) {
        monster.feed(S[i]);
    }
    return monster.output()
};

console.log(removeDuplicates("abbaca"))