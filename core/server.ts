import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import globalRouter from "../routes/GlobalRouter.ts";
import { CharactersRoute } from "../routes/CharactersRoute.ts";
import { ItemsRoute } from "../routes/ItemsRoute.ts";
import {APIRoute} from "../routes/APIRoute.ts";
import "jsr:@std/dotenv/load";

export class Server {
    private app: Application;
    private readonly _port: number;
    private readonly database: string | undefined;
    private readonly user: string | undefined;

    private _routes: APIRoute[] = []

    constructor() {
        this.app = new Application();
        this._port = Number(Deno.env.get("PORT")) || 8000;
        this.database = Deno.env.get("DATABASE_NAME");
        this.user = Deno.env.get("DATABASE_USER");

        this.printAsciiArt();

        if(this.isInvalidConfiguration()) {
            console.error("%cDatabase connection information is missing. Please check your .env file.\nRefer to the Readme for more information.",
                "color: red; font-weight: bold;");
            Deno.exit(1);
        }

        this.serverStartMessage();

        this.createRoutes();

        this.app.use(globalRouter.routes());
        this.app.use(globalRouter.allowedMethods());
    }

    public async start() {
        try {
            console.log(`%cStatus: Running\n\n`, "color: green; font-weight: bold");
            await this.app.listen({ port: this.port });
        } catch (exception) {
            console.error(exception);
        }
    }

    private isInvalidConfiguration() {
        return this.database === undefined || this.user === undefined;
    }

    private serverStartMessage() {
        console.log(`%cInitializing Horizon Forge Backend...`, "color: #DAA520; font-weight: bold;");
        console.log(`%c-------------------------------------------`, "color: #DAA520");

        console.log(`%cVersion: 0.1.0`, "color: lightgreen");
        console.log(`%cListening on Port: ${this.port}`, "color: lightgreen");
        console.log(`%cDatabase Connection: ${this.database}`, "color: lightgreen");
        console.log(`%cUser: ${this.user}`, "color: lightgreen");
    }

    private printAsciiArt() {
        const asciiArt = `
██╗  ██╗ ██████╗ ██████╗ ██╗███████╗ ██████╗ ███╗   ██╗    
██║  ██║██╔═══██╗██╔══██╗██║╚══███╔╝██╔═══██╗████╗  ██║    
███████║██║   ██║██████╔╝██║  ███╔╝ ██║   ██║██╔██╗ ██║    
██╔══██║██║   ██║██╔══██╗██║ ███╔╝  ██║   ██║██║╚██╗██║    
██║  ██║╚██████╔╝██║  ██║██║███████╗╚██████╔╝██║ ╚████║    
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝    
                                                           
                ███████╗ ██████╗ ██████╗  ██████╗ ███████╗ 
                ██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝ 
                █████╗  ██║   ██║██████╔╝██║  ███╗█████╗   
                ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝   
                ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗ 
                ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝ 
`;

        console.log(`%c${asciiArt}`, "color: cyan; font-weight: bold");
    }

    private createRoutes() {
        this._routes.push(new CharactersRoute());
        this._routes.push(new ItemsRoute());
        console.log(`%cCreated %c${this._routes.length} %croutes`,
            "color: lightgreen;","color: yellow;", "color: lightgreen;");
        console.log(`%c-------------------------------------------`, "color: #DAA520");
    }

    get routes(): APIRoute {
        return this._routes;
    }

    get port(): number {
        return this._port;
    }
}