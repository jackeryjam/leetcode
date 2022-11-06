
/**
 * https://leetcode-cn.com/leetbook/read/tencent/x5c1fh/
 * @param {Number} n
 * @return {boolean}
 */

function canWinNim(n: number): boolean {
    const arr = [true, true, true]
    if (n <= 3) {
        return arr[n - 1]
    }
    let tmp: boolean = true
    let index = 0
    for (let i = 4; i <= n; i++) {
        tmp = !arr[0] || !arr[1] || !arr[2]
        arr[index] = tmp
        index++
        index > 2 && (index = 0)
    }
    return tmp
};

for(let i = 1; i < 20; i++) {
    console.log(`${i}: ${canWinNim(i)}`)
}