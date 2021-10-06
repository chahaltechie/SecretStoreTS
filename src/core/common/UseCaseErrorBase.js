"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UseCaseErrorBase extends Error {
    constructor(message) {
        super(message);
        this.name = this.getErrorType();
    }
    getErrorType() {
        return this.constructor.name.toUpperCase();
    }
}
exports.default = UseCaseErrorBase;
