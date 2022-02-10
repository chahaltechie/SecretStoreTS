import {IAppConfig} from "./common/IAppConfig";
import {Application, default as express} from "express";
import SecretRouter from "./router/SecretRouter";
import bodyParser from "body-parser";
import IRouterBase from "./common/IRouterBase";
import {injectable, inject} from "tsyringe";

@injectable()
export class ExpressServer {
    #appConfig: IAppConfig;
    #application: Application;
    #router: IRouterBase;

    constructor(@inject('IAppConfig') appConfig: IAppConfig,@inject('IRouterBase') router: IRouterBase) {
        this.#application = express();
        this.#router = router;
        this.#appConfig = appConfig;
    }

    private configureApplication(): void {
        const app = this.#application;

        app.use(bodyParser.json());

        app.use(this.#router.getRouter());
    }

    public start() {
        if (!this.#application)
            this.#application = express();

        this.configureApplication();

        this.#application.listen(this.#appConfig.port, () => {
            console.log(`App listening on port ${this.#appConfig.port}!`);
        });

        return this.#application;
    }

}