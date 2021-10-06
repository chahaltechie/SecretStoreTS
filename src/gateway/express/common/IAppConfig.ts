export interface IAppConfig
{
    port:number;
}

export class ExpressConfig implements IAppConfig
{
    port: number;
    constructor(port : number) {
        this.port = port;
    }
    
    
}