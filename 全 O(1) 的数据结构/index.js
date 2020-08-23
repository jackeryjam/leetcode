/**
 * Initialize your data structure here.
 */
var AllOne = function () {
    this.arr = []
    this.map = {}
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    let index = this.map[key]
    if (index) {
        this.arr[index - 1].delete(key)
        this.map[key]++;
        if (index >= this.arr.length) {
            this.arr.push(new Set())
        }
        this.arr[index].add(key)
    } else {
        this.map[key] = 1;
        if (this.arr.length == 0) {
            this.arr.push(new Set())
        }
        this.arr[0].add(key)
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    if (!this.map[key]) {
        return;
    }
    let index = this.map[key]
    this.arr[index - 1].delete(key)
    this.arr[index - 2] && this.arr[index - 2].add(key)
    for (let i = this.arr.length - 1; this.arr[i] && this.arr[i].size == 0; i++) {
        this.arr.pop()
    }
    this.map[key]--;
    if (this.map[key] == 0) {
        delete this.map[key];
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    let len = this.arr.length;
    if (len == 0) {
        return ""
    }
    let map = this.arr[len - 1]
    for (let val of map) {
        return val;
    }
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    let len = this.arr.length;
    if (len == 0) {
        return ""
    }
    for (let map of this.arr) {
        for (let val of map) {
            return val;
        }
    }
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

var obj = new AllOne()
obj.inc("a")
obj.inc("b")
obj.inc("b")
obj.inc("c")
obj.inc("c")
obj.inc("c")
obj.dec("b")
obj.dec("b")
console.log(obj.getMinKey())
obj.dec("a")
console.log(obj.getMaxKey())
console.log(obj.getMinKey())