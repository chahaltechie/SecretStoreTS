import {UseCaseBase} from "@secretstore/core/common/UseCaseBase";
import {CreateSecretRequestDto} from "./CreateSecretRequestDto";
import {CreateSecretResponseDto} from "./CreateSecretResponseDto";
import {ISecretRepository} from "../../common/interface/ISecretRepository";
import {Secret} from "@secretstore/core/entity/secret";
import {Importance} from "@secretstore/core/type/importance";
import {ResponseBase} from "@secretstore/core/common/ResponseBase";
import {CreateSecretInvalidRequest} from "./error/CreateSecretInvalidRequest";

export class CreateSecretUseCase implements UseCaseBase<CreateSecretRequestDto,CreateSecretResponseDto>
{
    private readonly secretRepository : ISecretRepository;
    
    constructor(secretRepository : ISecretRepository) {
        this.secretRepository = secretRepository;
    }
    
    public async execute(req: CreateSecretRequestDto): Promise<CreateSecretResponseDto> {
        try {
            const secret = new Secret(req.title,req.description,Importance.HIGH, req.secrets);
            const result = await this.secretRepository.createItem(secret);
            return ResponseBase.successResponse(result);
        }
        catch (e) {
            return ResponseBase.errorResponse(new CreateSecretInvalidRequest(e));
        }
    }
}