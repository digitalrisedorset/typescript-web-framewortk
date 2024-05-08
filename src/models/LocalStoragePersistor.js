"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStoragePersistor = void 0;
var LocalStoragePersistor = /** @class */ (function () {
    function LocalStoragePersistor(rootUrl) {
        var _this = this;
        this.rootUrl = rootUrl;
        this.fetch = function (id) {
            return localStorage.getItem("".concat(_this.rootUrl, "_").concat(id));
        };
        this.save = function (data) {
            var id = data.id;
            if (typeof id !== 'number') {
                id = 1; // new Date().valueOf();
                data.id = id;
            }
            localStorage.setItem("".concat(_this.rootUrl, "_").concat(id), JSON.stringify(data));
        };
    }
    return LocalStoragePersistor;
}());
exports.LocalStoragePersistor = LocalStoragePersistor;
