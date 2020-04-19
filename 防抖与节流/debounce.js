function debounce1(func, wait) {
    let timeout;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        let context = this;
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    }
}

function debounce2(func, wait) {
    let timeout;
    return function (...args) {
        if (!timeout) {
            func.apply(this, args);
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = null;
        }, wait)
    }
}

function throttle1(func, wait) {
    let lastTime = 0;
    return function(...args) {
        let now = new Date();
        if(now - lastTime > wait) {
            lastTime = now;
            func.apply(this, args);
        }
    }
}

function throttle2(func, wait) {
    let timeout;
    return function(...args) {
        if(!timeout) {
            let context = this;
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    }
}