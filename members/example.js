// var msg = 'Hello World';
// console.log(msg);

const bar = () =>console.log('bar');
const baz = () =>console.log('baz');
const foo = () =>
{
    console.log('foo');
    bar();
    baz();
};
foo();