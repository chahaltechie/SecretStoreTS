import {SecretUseCasesConfiguration} from "./application/SecretUseCasesConfiguration";
import {ControllerConfiguration} from "./gateway/ControllerConfiguration";
import {RouterConfiguration} from "./gateway/RouterConfiguration";
import {ExpressConfiguration} from "./gateway/ExpressConfiguration";
import {IAppConfig} from "@secretstore/gateway/express/common/IAppConfig";

export async function bootstrap(): Promise<void>
{
    //initialize a use case
    const secretUseCase = SecretUseCasesConfiguration.initializeCreateSecretUseCase();
    
    //Initialize controller
    const secretController = ControllerConfiguration.getSecretController(secretUseCase);
    
    //initialize router
    const router = RouterConfiguration.getRouter(secretController);
    const appConfig = ExpressConfiguration.getExpressAppConfig(5000);
    
    //initialize server
    const app = ExpressConfiguration.getExpressServerApp(appConfig, router);
    
    //start the server
    app.start();
}