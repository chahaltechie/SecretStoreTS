import IRouterBase from "@secretstore/gateway/express/common/IRouterBase";
import SecretRouter from "@secretstore/gateway/express/router/SecretRouter";
import {CreateSecretController} from "@secretstore/gateway/express/controller/secret/CreateSecretController";

export class RouterConfiguration{
    
    public static getRouter(secretController: CreateSecretController) : IRouterBase
    {
        return new SecretRouter(secretController);
    }
    
}