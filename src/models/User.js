"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var EntityHandler_1 = require("./EntityHandler");
var Attributes_1 = require("./Attributes");
var LocalStoragePersistor_1 = require("./LocalStoragePersistor");
var rootUrl = 'http://localhost:3000/users';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.attributes = new Attributes_1.Attributes(data);
        //this.persister = new ApiPersister<UserProps>(rootUrl)
        _this.persister = new LocalStoragePersistor_1.LocalStoragePersistor('user');
        return _this;
    }
    return User;
}(EntityHandler_1.EntityHandler));
exports.User = User;
