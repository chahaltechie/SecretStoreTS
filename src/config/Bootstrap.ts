import {SecretUseCasesConfiguration} from "./application/SecretUseCasesConfiguration";
import {ControllerConfiguration} from "./gateway/ControllerConfiguration";
import {RouterConfiguration} from "./gateway/RouterConfiguration";
import {ExpressConfiguration} from "./gateway/ExpressConfiguration";
import { container } from "tsyringe";
import {ExpressConfig, IAppConfig} from "@secretstore/gateway/express/common/IAppConfig";
import {ControllerBase} from "../gateway/express/common/ControllerBase";
import {CreateSecretController} from "../gateway/express/controller/secret/CreateSecretController";
import IRouterBase from "../gateway/express/common/IRouterBase";
import SecretRouter from "../gateway/express/router/SecretRouter";
import {ExpressServer} from "../gateway/express/ExpressServer";
import {CreateSecretUseCase} from "../application/secret/createSecret/CreateSecretUseCase";
import {SecretInMemoryPersistence} from "../infrastructure/persistence/inMemory/SecretInMemoryPersistence";

export async function bootstrap(): Promise<void>
{
    container.register('port',{useValue:5000});
    container.register('IAppConfig', {useClass: ExpressConfig});
    
    //register IRouter, it needs SecretController
    container.register('ISecretRepository', {useClass:SecretInMemoryPersistence});
    container.register('CreateSecretUseCase',{useClass:CreateSecretUseCase})
    container.register('CreateSecretController', {useClass: CreateSecretController});
    container.register('IRouterBase', {useClass: SecretRouter});
    
    //register ExpressServer
    container.register(ExpressServer,{useClass:ExpressServer});
    const app = container.resolve(ExpressServer);
    
    // //initialize a use case
    // const secretUseCase = SecretUseCasesConfiguration.initializeCreateSecretUseCase();
    //
    // //Initialize controller
    // const secretController = ControllerConfiguration.getSecretController(secretUseCase);
    //
    // //initialize router
    // const router = RouterConfiguration.getRouter(secretController);
    // const appConfig = ExpressConfiguration.getExpressAppConfig(5000);
    //
    // //initialize server
    // const app = ExpressConfiguration.getExpressServerApp(appConfig, router);
    
    //start the server
    app.start();
}