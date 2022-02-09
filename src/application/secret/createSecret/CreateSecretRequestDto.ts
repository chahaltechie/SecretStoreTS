import {SecretItem} from "@secretstore/core/type/secretItem";
import { IsDefined, ArrayMinSize, ValidateNested } from "class-validator";
import { Expose } from "class-transformer";

export class CreateSecretRequestDto {
    @IsDefined()
    @Expose()
    title:string = "";
    
    @IsDefined()
    @Expose()
    description: string = "";

    // @IsArray()
    // @ArrayMinSize(1)
    // @ArrayMaxSize(10)
    // @Type(() => SecretItem)
    @ValidateNested({ each: true })
    @ArrayMinSize(2)
    secrets:SecretItem[] = [];
}