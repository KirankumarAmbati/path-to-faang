// Compose: output from one fn is sent to next from R => L
const compose = (...fns) => args => fns.reduceRight((output, fn) => fn(output), args);

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string.split('').reverse().join('');

compose(
    reverse,
    get6Characters,
    uppercase,
    getName,
  )({ name: 'Buckethead' });

// 'TEKCUB'