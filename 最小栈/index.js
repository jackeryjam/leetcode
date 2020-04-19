/**
 * 最小栈
 * https://leetcode-cn.com/explore/interview/card/bytedance/245/data-structure/1049/
 * initialize your data structure here.
 */

function Item(val, min) {
    this.val = val;
    this.min = min;
}

var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let min = this.stack.length ?
        this.stack[this.stack.length - 1].min :
        x;
    this.stack.push(new Item(x, min < x ? min : x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].min;
};
