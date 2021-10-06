import {ControllerBase} from "../../common/ControllerBase";
import {CreateSecretUseCase} from "@secretstore/application/secret/createSecret/CreateSecretUseCase";
import {NextFunction,Request, Response,Router} from "express";
import {CreateSecretRequestDto} from "@secretstore/application/secret/createSecret/CreateSecretRequestDto";
import {test} from "@secretstore/core";

export class CreateSecretController extends ControllerBase<CreateSecretUseCase>
{
    protected async processRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
        let response = await this.useCase.execute({secrets : [],description:"",title:""});
        return Promise.resolve(undefined);
    }

    public getReqDtoType(): any {
        return CreateSecretRequestDto;
    }
    
}