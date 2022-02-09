import {ControllerBase} from "../../common/ControllerBase";
import {CreateSecretUseCase} from "@secretstore/application/secret/createSecret/CreateSecretUseCase";
import {NextFunction,Request, Response} from "express";
import {CreateSecretRequestDto} from "@secretstore/application/secret/createSecret/CreateSecretRequestDto";

export class CreateSecretController extends ControllerBase<CreateSecretUseCase>
{
    protected async processRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
        let response = await this.useCase.execute(req.body);
        this.ok(res,response);
        return;
    }

    public getReqDtoType(): any {
        return CreateSecretRequestDto;
    }
    
}