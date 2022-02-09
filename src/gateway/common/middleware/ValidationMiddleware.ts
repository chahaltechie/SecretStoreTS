import { Response, Request, NextFunction } from "express";
import {validate} from "class-validator";
import {plainToClass} from "class-transformer";

const validationMw = (dtoClass: any, handler: (req: Request, res: Response, next: NextFunction)=>Promise<void>) => {
    return function (req: Request, res: Response, next: NextFunction) {
        const output: any = plainToClass(dtoClass, req.body);
        validate(output, { skipMissingProperties: true }).then(errors => {
            // errors is an array of validation errors
            if (errors.length > 0) {
                console.log(errors);
                let errorTexts = Array();
                for (const errorItem of errors) {
                    errorTexts = errorTexts.concat(errorItem.constraints);
                }
                res.status(400).send(errorTexts);   
                return;
            } else {
                res.locals.input = output;
                handler(req,res,next);
            }
        });
    };
};

export default validationMw;