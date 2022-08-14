let testObj = {
    foo: 2,
    bar: 'car',
    baz: {x: 'xx', y: 'yy', biz: {a: 56}}
};

const getByPath = (paths, obj) => paths.reduce((acc, path) => acc[path], obj);
console.log(getByPath(['baz', 'biz', 'a'], testObj));