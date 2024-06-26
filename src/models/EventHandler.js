"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        var _this = this;
        this.events = {};
        this.on = function (eventName, callback) {
            var handlers = _this.events[eventName] || [];
            handlers.push(callback);
            _this.events[eventName] = handlers;
        };
        this.trigger = function (eventName) {
            var handlers = _this.events[eventName];
            if (!handlers || handlers.length === 0) {
                return;
            }
            handlers.forEach(function (callback) {
                callback();
            });
        };
    }
    return EventHandler;
}());
exports.EventHandler = EventHandler;
