

const ObserverFactory = (function () {
    let ObserverCreater = function () {
        let subscribers = [];
        return {
            subscribe: (fn) => {
                subscribers.push(fn);
            },
            fire: (message) => {
                subscribers.forEach(fn => fn(message));
            },
            remove: (fn) => {
                // subscribers = subscribers.filter(f => f !== fn);
                for (let i in subscribers) {
                    if (subscribers[i] === fn) {
                        subscribers.splice(i, 1);
                        break;
                    }
                }

            }
        }
    };
    return function () {
        return ObserverCreater();
    }
})();


let Observer2 = (function () {
    let _message = {};
    return {
        subscribe: (type, fn) => {
            if (_message[type]) {
                _message[type].push(fn);
            } else {
                _message[type] = [fn];
            }
        },
        fire: (type, message) => {
            if (!_message[type]) {
                return;
            }
            _message[type].forEach(fn => fn(message));
        },
        remove: (type, fn) => {
            if (!_message[type]) {
                return;
            }
            let subscribers = _message[type];
            for (let i in subscribers) {
                if (subscribers[i] === fn) {
                    subscribers.splice(i, 1);
                    break;
                }
            }
        }
    }
})();