// Pipe: output from one fn is sent to next from L => R
const pipe = (...fns) => args => fns.reduce((output, fn) => fn(output), args);

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string.split('').reverse().join('');

pipe(
    getName,
    uppercase,
    get6Characters,
    reverse 
  )({ name: 'Buckethead' });

// 'TEKCUB'