import UseCaseErrorBase from "./UseCaseErrorBase";

export class ResponseBase<T,Y extends UseCaseErrorBase | undefined>{
    private readonly response? : T;
    private readonly error? : Y;
    
    public hasError : boolean = false;
    
    constructor(value? : T, error?:Y) {
        if (error)
        {
            this.hasError = true;
            this.error = error;
        }
        else {
            this.response = value;
        }
    }

    public getValue(): T {
        if (this.hasError) {
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this.response as T;
    }

    public getError(): Y | undefined {
        if (this.hasError) {
            return this.error as Y;
        }
        return undefined;
    }
    public static errorResponse<U, Y extends UseCaseErrorBase>(error: Y): ResponseBase<U, Y> {
        return new ResponseBase<U, Y>(undefined, error);
    }

    public static successResponse<T>(result: T): ResponseBase<T,undefined> {
        return new ResponseBase<T,undefined>(result, undefined);
    }
}