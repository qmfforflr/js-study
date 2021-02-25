
var x = 'global';

function foo(y) {
    var x = 'local';
    console.log(`x: ${x}`);
}
console.log(`x: ${x}`);
console.log(`x: ${y}`);
foo('parameter');