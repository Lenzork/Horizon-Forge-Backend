import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import globalRouter from "../routes/GlobalRouter.ts";
import { CharactersRoute } from "../routes/CharactersRoute.ts";
import { ItemsRoute } from "../routes/ItemsRoute.ts";
import {APIRoute} from "../routes/APIRoute.ts";

export class Server {
    private app: Application;
    private readonly _port: number;

    private _routes: APIRoute = [
        new CharactersRoute(),
        new ItemsRoute()
    ]

    constructor() {
        this.app = new Application();
        this._port = Number(Deno.env.get("PORT")) || 8000;

        this.app.use(globalRouter.routes());
        this.app.use(globalRouter.allowedMethods());
    }

    public async start() {
        try {
            console.log(`Server is running on port ${this.port}`);
            await this.app.listen({ port: this.port });
        } catch (exception) {
            console.error(exception);
        }
    }

    get routes(): APIRoute {
        return this._routes;
    }

    get port(): number {
        return this._port;
    }
}