import IRouterBase from "../common/IRouterBase";
import {Router} from "express";
import {CreateSecretController} from "../controller/secret/CreateSecretController";
import validationMw from "../../common/middleware/ValidationMiddleware";
import {injectable, inject, autoInjectable} from "tsyringe";

@injectable()
export default class SecretRouter implements IRouterBase
{
    #createSecretController : CreateSecretController;
    readonly #router:Router;
    constructor(@inject('CreateSecretController') createSecretController: CreateSecretController) {
        this.#createSecretController = createSecretController;
        
        this.#router = Router();
        this.bootstrapRouter();
    }

    private bootstrapRouter() {
        this.#router.post("/api/v1/secret",this.#createSecretController.getRequestHandler())
    }
    
    getRouter(): Router {
        return this.#router;
    }
    
}