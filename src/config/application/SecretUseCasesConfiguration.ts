import {ISecretRepository} from "@secretstore/application/common/interface/ISecretRepository";
import {CreateSecretUseCase} from "@secretstore/application/secret/createSecret/CreateSecretUseCase";
import {SecretInMemoryPersistence} from "@secretstore/infrastructure/persistence/inMemory/SecretInMemoryPersistence";

export class SecretUseCasesConfiguration{
    
    public static initializeCreateSecretUseCase()
    {
        return new CreateSecretUseCase(new SecretInMemoryPersistence());
    }
}   