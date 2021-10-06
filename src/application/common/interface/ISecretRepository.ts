import {IRepository} from "./IRespository";
import {Secret} from "@secretstore/core/entity/secret";

export interface ISecretRepository extends IRepository<Secret> 
{
    getAllSecrets():Promise<Secret[] | undefined>;
}