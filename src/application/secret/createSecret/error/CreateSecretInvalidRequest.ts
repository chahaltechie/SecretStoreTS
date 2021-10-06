import UseCaseErrorBase from "@secretstore/core/common/UseCaseErrorBase";

export class CreateSecretInvalidRequest extends UseCaseErrorBase
{
    constructor(requestPayload: unknown) {
        super(`request '${JSON.stringify(requestPayload)}' is not valid`);
    }
}