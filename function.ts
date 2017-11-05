//functions with types
{
    function fn_withTypes(x: number, y:number):number {
        return x + y;
    }

    let a = fn_withTypes;
}

//function with types on left side, automatic type infer
{
    let a: (x: number, y: number) => number = function (x, y) {
        return x + y;
    }
}

//function with type on right side, automatic type infer
{
    let a = function (x: number, y: number): number {
        return x + y;
    }
    alert(a(2,4));
}

//or 
{
    let a =  (x: number, y: number) : number =>  {
        return x + y;
    }
    alert(a(2,4));
}


//function with types on both sides
{
    let a : (a: number, b : number) => number = (x: number, y: number) : number =>  {
        return x + y;
    }
    alert(a(10, 20));
}

