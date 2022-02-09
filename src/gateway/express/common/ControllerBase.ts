import {UseCaseBase} from "@secretstore/core/common/UseCaseBase";
import {NextFunction, Request, RequestHandler, Response} from "express";
import ValidationMiddleware from "../../common/middleware/ValidationMiddleware";

export const awaitHandlerFactory = (middleware: RequestHandler) => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await middleware(req, res, next);
        } catch (e) {
            next(e);
        }
    };
};



export abstract class ControllerBase<T extends UseCaseBase>
{
    protected useCase:T;

    constructor(useCase:T) {
        this.useCase = useCase;
    }

    public abstract getReqDtoType() : any;
    
    protected abstract processRequest(req: Request, res:Response, next:NextFunction ):Promise<void>;

    public getRequestHandler(): RequestHandler {
        const handler = this.processRequest.bind(this);
        const validationMiddlewareHandler = awaitHandlerFactory(ValidationMiddleware(this.getReqDtoType(),handler));
        return  awaitHandlerFactory(validationMiddlewareHandler);
    }
    
    protected ok<T>(res:Response,data?:T)
    {
        if (!data) {
            return res.sendStatus(200);
        }
        res.type("application/json");
        return res.status(200).json(data);
    }

    protected fail(res: Response, error: Error | string): {} {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        });
    }


    protected badRequest(res: Response, message?: string): {} {
        return ControllerBase.jsonResponse(res, 400, { message: message || "bad requst" });
    }

    protected unauthorized(res: Response, message?: string): {} {
        return ControllerBase.jsonResponse(res, 401, { message: message || "Unauthorized" });
    }

    protected forbidden(res: Response, message?: string): {} {
        return ControllerBase.jsonResponse(res, 403, { message: message || "Forbidden" });
    }

    protected notFound(res: Response, message?: string): {} {
        return ControllerBase.jsonResponse(res, 404, { message: message || "Not found" });
    }

    protected created(res: Response, payload: {} = {}): {} {
        return ControllerBase.jsonResponse(res, 201, payload);
    }

    protected static jsonResponse(res: Response, code: number, payload: {}): {} {
        return res.status(code).json(payload);
    }
}