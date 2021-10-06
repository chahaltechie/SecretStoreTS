import {ExpressServer} from "@secretstore/gateway/express/ExpressServer";
import {ExpressConfig, IAppConfig} from "@secretstore/gateway/express/common/IAppConfig";
import IRouterBase from "@secretstore/gateway/express/common/IRouterBase";

export class ExpressConfiguration
{
    public static getExpressServerApp(appConfig : IAppConfig, router : IRouterBase) : ExpressServer
    {
        return new ExpressServer(appConfig,router);
    }
    
    public static getExpressAppConfig(port : number)
    {
        return new ExpressConfig(port);
    }
}