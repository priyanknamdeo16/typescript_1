var myHouse = {
    name: 'kul',
    rooms: 1,
    window: 2,
    getPerson: function () {
        var _this = this;
        return function () {
            return {
                name: _this.name,
                age: 30
            };
        };
    }
};
var fn = myHouse.getPerson();
console.log(fn());
//# sourceMappingURL=index.js.map