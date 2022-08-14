const STATES = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATES.PENDING
    #value = null

    #onSuccessBinded = this.#onSuccess.bind(this)
    #onFailBinded = this.#onFail.bind(this)

    constructor(executor) {
        if(typeof executor !== 'function') {
            throw new TypeError('Executor should be  function');
        }

        try {
            executor(this.#onSuccessBinded, this.#onFailBinded)
        } catch(e) {
            this.reject(e)
        }
    }

    #onSuccess(value) {
        queueMicrotask(() => {
            if(this.#state !== STATES.PENDING) return

            if(value instanceof MyPromise) {
                value.then(this.#onSuccessBinded, this.#onFailBinded)
                return
            }

            this.#value = value
            this.#state = STATES.FULFILLED

            this.#runCallCbs()
        })
    }

    #onFail(reason) {
        queueMicrotask(() => {
            if(this.#state !== STATES.PENDING) return

            if(value instanceof MyPromise) {
                value.then(this.#onSuccessBinded, this.#onFailBinded)
                return
            }

            if(this.#catchCbs.length === 0) {
                throw UncaughtPromiseError(reason)
            }

            this.#value = reason
            this.#state = STATES.REJECTED

            this.#runCallCbs()
        })
    }

    #runCallCbs() {
        if(this.#state === STATES.FULFILLED) {
            this.#thenCbs.forEach(cb => {
                cb(this.#value)
            })

            this.#thenCbs = []
        } else if(this.#state === STATES.REJECTED) {
            this.#catchCbs.forEach(cb => {
                cb(this.#value)
            })

            this.#catchCbs = []
        }
    }

    then(thenCb, catchCb) {
        return new MyPromise((resolve, reject) => {

            this.#thenCbs.push(result => {
                if(thenCb == null) {
                    resolve(result)
                    return
                }

                try {
                    resolve(thenCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#catchCbs.push(result => {
                if(catchCb == null) {
                    reject(result)
                    return
                }

                try {
                    resolve(catchCb(result))
                } catch (error) {
                    reject(error)
                }
            })
    
            this.#runCallCbs()
        })
    }
    
    catch(cb) {
        return this.then(undefined, cb)
    }

    finally(cb) {
        this.then(result => {
            cb()
            return result
        }, result => {
            cb()
            throw result
        })
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value)
        })
    }

    static reject(raeson) {
        return new MyPromise((_, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        const results = []
        let completedPromises = 0;

        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                promise
                    .then(result => {
                        results.push(result)
                        completedPromises++

                        if(completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
                    .catch(reason => {
                        reject(reason)
                    })
            })
        })
    }

    static allSettled(promises) {
        const results = []
        let completedPromises = 0;

        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                promise
                    .then(result => {
                        results.push({
                            status: STATES.FULFILLED,
                            value: result
                        })
                    })
                    .catch(reason => {
                        results.push({
                            status: STATES.REJECTED,
                            value: reason
                        })
                    })
                    .finally(() => {
                        completedPromises++

                        if(completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
            })
        })
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve).catch(reject)
            })
        })
    }

    static any(promises) {
        const reasons = []
        let erroredPromises = 0
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise
                    .then(resolve)
                    .catch(reason => {
                        reasons.push(reason)
                        erroredPromises++

                        if(erroredPromises === promises.length) {
                            reject(reasons)
                        }
                    })
            })
        })
    }
}

class UncaughtPromiseError extends Error {
    constructor(error) {
        super(error)

        this.stack = `(in promise) ${error.stack}`
    }
}

console.log(new MyPromise(5));