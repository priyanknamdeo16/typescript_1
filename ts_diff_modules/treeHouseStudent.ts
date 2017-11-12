import {IStudent} from './IStudent';
import {a} from './myconst';

export class TreeHouseStudent implements IStudent {
    school:string;
    constructor(public name = 'priyank') {
        this.school = 'Tree House';
    }
    getName () {
        return this.name + a;
    }
} 