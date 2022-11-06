function* subGen() {
    const a = yield Promise.resolve(2)
    return a
}

function* gen() {
    const a = yield subGen()
    const b = yield 3
    const c = yield Promise.resolve(5)
    console.log('expect to be 10', a + b + c)
}

function* subGen2() {
    const a = yield Promise.reject(2)
    return a
}

function* gen2() {
    try {
        const a = yield subGen2()
        const b = yield 3
        const c = yield Promise.resolve(5)
        console.log('expect to be 10', a + b + c)
    } catch(e) {
        console.log('expect to be 2', 2)
    }
}

const genConstructor = (function*(){})().constructor
function co(genInstance, nextAgv, error) {
    if(nextAgv instanceof Promise) {
        return nextAgv.then(res =>{
            return co(genInstance, res)})
         .catch(err => co(genInstance, null, err))
    }
    const res = error ? genInstance.throw(error): genInstance.next(nextAgv)
    const value = res.value
    if(res.done) {
        return value
    } else {
        if(value && value.constructor === genConstructor) {
            try {
                const res = co(value)
                return co(genInstance, res)
            } catch(e) {
                return co(genInstance, null, e)
            }
        }
        else {
            return co(genInstance, value)
        }
    }
}

co(gen())
co(gen2())