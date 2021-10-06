"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBase = void 0;
class ResponseBase {
    constructor(value, error) {
        this.hasError = false;
        if (error) {
            this.hasError = true;
            this.error = error;
        }
        else {
            this.response = value;
        }
    }
    getValue() {
        if (this.hasError) {
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this.response;
    }
    getError() {
        if (this.hasError) {
            return this.error;
        }
        return undefined;
    }
    static errorResponse(error) {
        return new ResponseBase(undefined, error);
    }
    static successResponse(result) {
        return new ResponseBase(result, undefined);
    }
}
exports.ResponseBase = ResponseBase;
