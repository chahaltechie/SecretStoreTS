import {BaseEntity} from "../common/BaseEntity";
import {SecretItem} from "../type/secretItem";
import {Importance} from "../type/importance";

export class Secret extends BaseEntity
{
    title: string;
    description: string;
    importance: Importance;
    items: Array<SecretItem>

    constructor(title: string, description: string, importance: Importance, secrets: Array<SecretItem>) {
        super();
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.items = secrets;
    }
}



