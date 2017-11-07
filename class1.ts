class Person {
    public static HOBBY : string = 'cricket';
    //A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended
    //e.g. protected constructor(public name : string, public age: number, public sex : string) {}
    //hence this class cannot be instantiated

    //Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both. Using private for a parameter property declares and initializes a private member; likewise, the same is done for public, protected, and readonly.
    constructor(public _name : string, public _age: number, public _sex : string) {
    }
    //method
    getName() {
        
        return this._name + Person.HOBBY;
    }

    set age(val:number) {
        this._age = val;
    }

    get age () {
        return this ._age;
    }
}

class Employee extends Person {
    salary : number;
    constructor (name, age, sex, salary) {
        super(name, age, sex);
        this.salary = salary;
    }

    //method overriding
    getName () {
        return super.getName() +Person.HOBBY ;
    }
}

var p = new Employee('priyank', 33, 'male', 1000);
p.age = 30;
console.log(p.getName()); //priyank
console.log(p.age); 
console.log(Person.HOBBY);


//

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
