import {SecretItem} from "@secretstore/core/type/secretItem";
import { IsDefined } from "class-validator";
import { Expose } from "class-transformer";

export class CreateSecretRequestDto {
    @IsDefined()
    @Expose()
    title:string = "";
    
    @IsDefined()
    @Expose()
    description: string = "";
    
    @Expose()
    secrets:SecretItem[] = [];
}