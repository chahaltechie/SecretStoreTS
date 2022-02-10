import {ControllerBase} from "../../common/ControllerBase";
import {CreateSecretUseCase} from "@secretstore/application/secret/createSecret/CreateSecretUseCase";
import {NextFunction,Request, Response} from "express";
import {CreateSecretRequestDto} from "@secretstore/application/secret/createSecret/CreateSecretRequestDto";
import {injectable, inject} from "tsyringe";

@injectable()
export class CreateSecretController extends ControllerBase<CreateSecretUseCase>
{
    constructor(@inject('CreateSecretUseCase') secretUseCase:CreateSecretUseCase) {
        super(secretUseCase);
    }
    protected async processRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
        let response = await this.useCase.execute(req.body);
        if(response.hasError)
        {
            this.fail(res,response.getError()!);
        }
        this.ok(res,response);
        return;
    }

    public getReqDtoType(): any {
        return CreateSecretRequestDto;
    }
    
}