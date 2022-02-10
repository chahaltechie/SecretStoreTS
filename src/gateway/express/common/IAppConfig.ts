import {injectable, inject} from "tsyringe";

export interface IAppConfig
{
    port:number;
}

@injectable()
export class ExpressConfig implements IAppConfig
{
    port: number;
    constructor(@inject('port') port : number) {
        this.port = port;
    }
    
    
}