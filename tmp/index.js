function* gen() {
    Promise.resolve().then(() => {
        console.log('resolve')
    })
    const res = yield 1
    console.log(res)
    yield 2
}

const genInstance = gen()
console.log( genInstance.next(3).value)
console.log( genInstance.next(3).value)