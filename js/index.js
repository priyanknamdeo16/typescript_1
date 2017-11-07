var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended
    //e.g. protected constructor(public name : string, public age: number, public sex : string) {}
    //hence this class cannot be instantiated
    //Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both. Using private for a parameter property declares and initializes a private member; likewise, the same is done for public, protected, and readonly.
    function Person(_name, _age, _sex) {
        this._name = _name;
        this._age = _age;
        this._sex = _sex;
    }
    //method
    Person.prototype.getName = function () {
        return this._name + Person.HOBBY;
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        },
        enumerable: true,
        configurable: true
    });
    Person.HOBBY = 'cricket';
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, sex, salary) {
        var _this = _super.call(this, name, age, sex) || this;
        _this.salary = salary;
        return _this;
    }
    //method overriding
    Employee.prototype.getName = function () {
        return _super.prototype.getName.call(this) + Person.HOBBY;
    };
    return Employee;
}(Person));
var p = new Employee('priyank', 33, 'male', 1000);
p.age = 30;
console.log(p.getName()); //priyank
console.log(p.age);
console.log(Person.HOBBY);
//
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=index.js.map