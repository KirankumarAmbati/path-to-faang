function c1(...args) {
    console.log('Callback 1 invoked: ', { args });
}

function c2(...args) {
    console.log('Another callback invoked: ', { args });
}

function c3(...args) {
    console.log('Another callback invoked: ', { args });
}

class EventEmitter {
    constructor() {
        this.listeners = {}
    }
    on(event, cb) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(cb);
        return this;
    }

    off(event, cb) {
        if(!this.listeners[event]) {
            throw new Error(`Listeners with event: ${event} not found.`)
        }
        this.listeners[event] = this.listeners[event].filter(listener => listener !== cb);
        return this;
    }

    once(event, cb) {
        let onceWrapper = (...args) => {
            cb.apply(this, args);
            this.off(event, onceWrapper)
        }

        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(onceWrapper);

        return this;
    }

    listenerCount(event) {
        return this.listeners[event].length;
    }

    rawListeners(event) {
        return this.listeners[event]
    }

    emit(event, ...args) {
        if(!this.listeners[event]) {
            throw new Error(`Listeners with event: ${event} not found.`)
        }
        this.listeners[event].forEach(cb => cb.apply(this, args));
        return this;
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);
myEmitter.emit('eventOne');

console.log('=============');

myEmitter.off('eventOne', c2);
myEmitter.off('eventOne', c3);
myEmitter.emit('eventOne');

console.log(myEmitter.listenerCount('eventOne'));
console.log(myEmitter.rawListeners('eventOne'));

myEmitter.once('eventOnce', (name) => console.log(`Hello, ${name}`));  
myEmitter.emit('eventOnce', 'Saideep');
myEmitter.emit('eventOnce');

myEmitter.emit('event');

