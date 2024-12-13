/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Do not change the class name
 **/

class Emitter {
    // write your code here
    constructor() {
        this.listeners = [];
    }

    register(event) {
        this.listeners[event] = [];
    }

    subscribe(event, cb) {
        if (!this.listeners[event]) {
            this.register(event);
        }

        this.listeners[event].push(cb);

        return {
            release: () => {
                this.listeners[event] = this.listeners[event].filter(
                    (listener) => listener !== cb
                );
            },
        };
    }

    emit(event, ...args) {
        this.listeners[event].forEach((listener) => {
            listener.apply(this, args);
        });
    }
}

const emitter = new Emitter();

const cb1 = (...args) => {
    console.log("Callback 1: ", { args });
};

const cb2 = () => {
    console.log("Callback 2");
};

const sub1 = emitter.subscribe("ev1", cb1);
const sub2 = emitter.subscribe("ev1", cb2);

emitter.emit("ev1", 1, 2);

sub1.release();
emitter.emit("ev1", 1, 2);
emitter.emit("ev1", 1, 2);
emitter.emit("ev1", 1, 2);
