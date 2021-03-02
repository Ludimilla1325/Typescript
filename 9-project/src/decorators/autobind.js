"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autobind = void 0;
// autobind decorator
function autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
exports.autobind = autobind;
