interface House {
    name : string;
    rooms : number;
    window : number;
    getPerson () : () => Person;
}

interface Person {
    name : string;
    age : number;
}

let myHouse: House = {
    name : 'kul',
    rooms : 1,
    window : 2,
    getPerson : function (this:House) {
        return () => {
            return {
                name : this.name,
                age : 30
            };
        };
    }
};

var fn = myHouse.getPerson();
console.log(fn());
