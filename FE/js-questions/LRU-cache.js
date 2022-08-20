class LRUCache {
    constructor(n) {
        this.noOfElements = n;
        this.cache = []
    }
    
    put(key, value) {
        if(Object.keys(this.cache).length < this.noOfElements) {
            this.cache.unshift([key, value]);
        } else {
            this.cache.unshift([key, value]);
            this.cache.length = this.noOfElements;
        }
    }

    get(key) {
        let indexReq;
        const match = this.cache.find((c, index ) => {
            if(c[0] === key) {
                indexReq = index;
                return c;
            }
        });

        if(match) {
            this.cache = [...this.cache.slice(0, indexReq), ...this.cache.slice(indexReq + 1)];
            this.put(match[0], match[1]);
            return match[1];
        }

        return null;
    }
}

const cache = new LRUCache(3);
cache.put('x', 5);
cache.put('y', 7);
cache.put('z', 8);
cache.put('a', 9);

console.log(cache);
console.log(cache.get('y'));
console.log(cache);
cache.put('b', 4);
console.log(cache);



