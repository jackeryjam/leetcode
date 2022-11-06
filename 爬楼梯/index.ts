/**
 * 买卖股票的最佳时机
 * https://leetcode-cn.com/leetbook/read/tencent/x5vk4t/
 * @param {number} n
 * @return {number}
 */
const cache: {[key:number]: number} = {}
function climbStairs(n: number): number {
    const _climbStairs = (n: number): number => {
        if(cache[n]) {
            return cache[n]
        }
        switch(n) {
            case 1: return 1
            case 2: return 2
            default: return _climbStairs(n-1) + _climbStairs(n-2)
        }
    }
    const tmp = _climbStairs(n)
    cache[n] = tmp
    return tmp
};

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))