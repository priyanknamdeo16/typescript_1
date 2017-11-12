define(["require", "exports", "./myconst"], function (require, exports, myconst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TreeHouseStudent = /** @class */ (function () {
        function TreeHouseStudent(name) {
            if (name === void 0) { name = 'priyank'; }
            this.name = name;
            this.school = 'Tree House';
        }
        TreeHouseStudent.prototype.getName = function () {
            return this.name + myconst_1.a;
        };
        return TreeHouseStudent;
    }());
    exports.TreeHouseStudent = TreeHouseStudent;
});
//# sourceMappingURL=treeHouseStudent.js.map