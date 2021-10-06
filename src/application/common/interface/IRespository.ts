import {BaseEntity} from "@secretstore/core/common/BaseEntity";

export interface IRepository<T extends BaseEntity> {

    getItems(query: string): Promise<T[] | undefined>;

    getItem(id: string): Promise<T | undefined>;

    createItem(item: T): Promise<T>;

    updateItem(item: T): Promise<T | undefined>;
}