import {v4 as uuid} from 'uuid';

export class BaseEntity {
    id: string = uuid();
    createdOn: string = new Date().toISOString();
    modifiedOn: string = "";
    createdBy: string = "";
    modifiedBy: string = ""
}   