//ovrloading
// number -> object
// object -> number

function a(x: {name:string}):number;
function a(x: number) : {name : string};
function a(x):any {
    if(typeof x === 'number') {
        return {name : 'priyank'};
    }
    if(typeof x === 'object') {
        return 10;
    }
}

console.log(a({name:'priyank'})); //10
console.log(a(10)); //{name : 'priyank'}
console.log(a(null)); //10 because typeof null is object
console.log(a(true)); //WARNING: [ts] Argument of type 'boolean' is not assignable to parameter of type 'number'.

