//ovrloading
// number -> object
// object -> number
function a(x) {
    if (typeof x === 'number') {
        return { name: 'priyank' };
    }
    if (typeof x === 'object') {
        return 10;
    }
}
console.log(a({ name: 'priyank' })); //10
console.log(a(10)); //{name : 'priyank'}
console.log(a(null)); //10 because typeof null is object
console.log(a(true)); //WARNING: [ts] Argument of type 'boolean' is not assignable to parameter of type 'number'.
//# sourceMappingURL=index.js.map