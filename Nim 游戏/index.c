bool canWinNim(int n){
    bool arr[3] = {true, true, true}
    if (n <= 3) {
        return arr[n - 1]
    }
    bool tmp = true
    int index = 0
    for (int i = 4; i <= n; i++) {
        tmp = !arr[0] || !arr[1] || !arr[2]
        arr[index] = tmp
        index++
        index > 2 && (index = 0)
    }
    return tmp
}