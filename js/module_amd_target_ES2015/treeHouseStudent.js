define(["require", "exports", "./myconst"], function (require, exports, myconst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TreeHouseStudent {
        constructor(name = 'priyank') {
            this.name = name;
            this.school = 'Tree House';
        }
        getName() {
            return this.name + myconst_1.a;
        }
    }
    exports.TreeHouseStudent = TreeHouseStudent;
});
//# sourceMappingURL=treeHouseStudent.js.map