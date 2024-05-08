"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        var _this = this;
        this.data = data;
        this.get = function (key) {
            if (key === 'id') {
                return 1;
            }
            return _this.data[key];
        };
        this.set = function (update) {
            //Object.assign(this.data, update);
            Object.assign(_this.data, update);
        };
    }
    Object.defineProperty(Attributes.prototype, "getAll", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    return Attributes;
}());
exports.Attributes = Attributes;
