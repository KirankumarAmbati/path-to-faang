Array.prototype.myMap =  function(cb) {
    const self = this;

    const result = [];

    for(let index=0; index<self.length; index++) {
        result[index] = cb(self[index], index, self);
    }

    return result;
}

console.log([2, 2, 3, 4].myMap((v) => v * 2)); // [2, 4, 6, 8]

Array.prototype.myFilter =  function(cb) {
    const self = this;

    const result = [];

    for(let index=0; index<self.length; index++) {
        if(cb(self[index], index, self)) {
            result.push(self[index]);
        }
    }

    return result;
}

console.log([1, 2, 3, 4].myFilter((v) => v > 2)); // [3, 4]

Array.prototype.myReduce =  function(cb, initialValue) {
    const self = this;

    let i = 0;
    let acc;
    if(initialValue != null) {
        acc = initialValue;
    } else {
        acc = self[i++];
    }

    for(; i<self.length; i++) {
        acc = cb(acc, self[i], i, self);
    }

    return acc;
}


console.log([1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0)); // 10 
console.log([1, 2, 3, 4].myReduce((acc, curr) => acc + curr)); // 10 

const data = [{
    name: 'emp1',
    location: 'loc1',
    manager: 'manager1'
}, {
    name: 'emp2',
    location: 'loc2',
    manager: 'manager2'
}, {
    name: 'emp3',
    location: 'loc4',
    manager: 'manager1'
}, {
    name: 'emp4',
    location: 'loc2',
    manager: 'manager2'
}, {
    name: 'emp5',
    location: 'loc3',
    manager: 'manager4'
}];

console.log(data.groupBy('manager'));

// new push 


// For an array, create an event subscribing and publishing mechanism, where an event gets dispatched, when an item is added to an array.
// For simplicity do not alter the push method, instead create a new pushWithEvent method.

// const myArr = [];
// myArr.addListener('add', (items) => {
// })
// myArr.pushWithEvent(1)