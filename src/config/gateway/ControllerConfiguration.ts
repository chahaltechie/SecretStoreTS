import {CreateSecretController} from "@secretstore/gateway/express/controller/secret/CreateSecretController";
import {CreateSecretUseCase} from "@secretstore/application/secret/createSecret/CreateSecretUseCase";

export class ControllerConfiguration
{
    public static getSecretController(useCase: CreateSecretUseCase)
    {
        return new CreateSecretController(useCase);
    }
}