import {ResponseBase} from "@secretstore/core/common/ResponseBase";
import {Secret} from "@secretstore/core/entity/secret";
import {CreateSecretInvalidRequest} from "./error/CreateSecretInvalidRequest";

export type CreateSecretResponseDto = ResponseBase<Secret,CreateSecretInvalidRequest | undefined>;