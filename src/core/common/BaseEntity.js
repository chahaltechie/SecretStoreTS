"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const uuid_1 = require("uuid");
class BaseEntity {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdOn = new Date().toISOString();
        this.modifiedOn = "";
        this.createdBy = "";
        this.modifiedBy = "";
    }
}
exports.BaseEntity = BaseEntity;
