{
    function a() {
        return () => {
            alert(this.name); //priyank, this is from lexicacl scope
        }
    }

    a.call({name: 'priyank'})();
}

///////////////////////////
//with "noImplicitThis": true in tsconfig.json - WARNING this 'this' implicitly has type 'any' because it does not have a type annotation.
{
    let o = {
        val : ['one', 'two'],
        getCard : function() {
            return () => {
                console.log(typeof this.val[0]);
                console.log( this.val[0]);
                return {
                    aa : this.val[0]
                }
            };
        }
    };

    let fn = o.getCard();
    let abc = fn();
}
/////////////////////////////////
{
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
}
