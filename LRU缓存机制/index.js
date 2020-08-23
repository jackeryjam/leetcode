/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = {}
    this.tail = null
    this.head = null
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let target = this.map[key]
    if (target == null) {
        return -1;
    }
    if (target == this.head) {
        return target.val;
    }
    if (target.pre != null) {
        target.pre.next = target.next;
    }
    if (target.next != null) {
        target.next.pre = target.pre;
    }
    if(this.tail == target) {
        this.tail = target.pre
    }
    target.pre = null;
    target.next = this.head;
    this.head.pre = target;
    this.head = target

    return this.head.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.get(key) != -1) {
        this.map[key].val = value
        return
    }
    let target = {
        key,
        val: value,
        pre: null,
        next: this.head
    }
    if (this.head != null) {
        this.head.pre = target
    }
    this.map[key] = this.head = target
    if (this.tail == null) {
        this.tail = target;
    }
    if (this.capacity == 0) {
        let tailKey = this.tail.key;
        delete this.map[tailKey]
        this.tail = this.tail.pre;
        this.tail.next = null;
    } else {
        this.capacity--;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// var cache = new LRUCache(2 /* 缓存容量 */);
// cache.put(2, 1);
// cache.put(1, 1);
// cache.put(2, 3);
// cache.put(4, 1);
// console.log(cache.get(1));       // 返回 -1
// console.log(cache.get(2));       // 返回 3

var cache = new LRUCache(3 /* 缓存容量 */);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
console.log(cache.get(4));
console.log(cache.get(3));
console.log(cache.get(2));
console.log(cache.get(1));
cache.put(5, 5);
console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache.get(5));  