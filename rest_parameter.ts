{
    let a = (x:number, ...y:number[]) : number => {
        return y.length;
    } 
}


{
    let a: (x:number, ...y: number[])=> number = (x: number, ...y: number[]):number => {
        return y.length;
    }
}