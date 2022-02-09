import { IsDefined } from "class-validator";
import { Expose } from "class-transformer";


export class SecretItem  {
    @IsDefined()
    @Expose()
    name: string = "";
    
    @IsDefined()
    @Expose()
    value: string = "";
}