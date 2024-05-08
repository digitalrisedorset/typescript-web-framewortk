"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityHandler = void 0;
var EventHandler_1 = require("./EventHandler");
var EntityHandler = /** @class */ (function () {
    function EntityHandler() {
        var _this = this;
        this.get = function (key) {
            return _this.attributes.get(key);
        };
        this.events = new EventHandler_1.EventHandler();
    }
    Object.defineProperty(EntityHandler.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityHandler.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: false,
        configurable: true
    });
    EntityHandler.prototype.fetch = function () {
        var id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('The id cannot be null to call the fetch method');
        }
        var response = this.persister.fetch(id); //.then((response): void => {
        this.set(response);
        //})
    };
    EntityHandler.prototype.save = function () {
        this.persister.save(this.attributes.getAll);
        //.then((response: AxiosResponse) => {
        this.trigger('save');
        //})
        //.catch(() => {
        //   this.trigger('error')
        //})
    };
    EntityHandler.prototype.set = function (update) {
        this.attributes.set(update);
        this.trigger('change');
    };
    return EntityHandler;
}());
exports.EntityHandler = EntityHandler;
