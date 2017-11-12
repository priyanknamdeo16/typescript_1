import { a } from './myconst';
var TreeHouseStudent = /** @class */ (function () {
    function TreeHouseStudent(name) {
        if (name === void 0) { name = 'priyank'; }
        this.name = name;
        this.school = 'Tree House';
    }
    TreeHouseStudent.prototype.getName = function () {
        return this.name + a;
    };
    return TreeHouseStudent;
}());
export { TreeHouseStudent };
//# sourceMappingURL=treeHouseStudent.js.map