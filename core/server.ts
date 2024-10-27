import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import globalRouter from "../routes/GlobalRouter.ts";
import { CharactersRoute } from "../routes/CharactersRoute.ts";
import { ItemsRoute } from "../routes/ItemsRoute.ts";
import {APIRoute} from "../routes/APIRoute.ts";
import client from "../database.ts";
import "jsr:@std/dotenv/load";

export class Server {
    private app: Application;
    private readonly _port: number;
    private readonly databasePort: number;
    private readonly databaseUser: string | undefined;
    private readonly databaseHost: string | undefined;
    private readonly databaseName: string | undefined;

    private readonly timeoutBeforeExit = 5000;

    private _routes: APIRoute[] = []

    constructor() {
        this.app = new Application();
        this._port = Number(Deno.env.get("BACKEND_PORT")) || 8000;
        this.databaseHost = Deno.env.get("DATABASE_HOST");
        this.databaseName = Deno.env.get("DATABASE_NAME");
        this.databasePort = Number(Deno.env.get("DATABASE_PORT"));
        this.databaseUser = Deno.env.get("DATABASE_USER");
    }

    public async start() {
        this.printAsciiArt();

        if(this.isInvalidConfiguration()) {
            await this.printErrorMessageAndExit();
        } else if (!await this.checkDatabaseConnection()) {
            await this.printDatabaseErrorMessageAndExit();
        } else {
            this.serverStartMessage();

            this.createRoutes();

            this.app.use(globalRouter.routes());
            this.app.use(globalRouter.allowedMethods());

            try {
                console.log(`%cStatus: Running`, "color: green; font-weight: bold");
                await this.app.listen({ port: this.port });
            } catch (exception) {
                console.error(exception);
            }
        }
    }

    private isInvalidConfiguration() {
        return this.databaseUser === undefined ||
            this.databaseHost === undefined ||
            this.databaseName === undefined ||
            this.databasePort === undefined;
    }

    private async checkDatabaseConnection(): Promise<boolean> {
        return await client.execute("SELECT 1")
            .then(() => true)
            .catch((exception) => {
                console.error(exception.message);
                return false;
            });
    }

    private async printErrorMessageAndExit() {
        console.error("%cDatabase connection information is missing. Please check your .env file.\nRefer to the Readme for more information.",
            "color: red; font-weight: bold;");

        await new Promise((resolve) => setTimeout(resolve, this.timeoutBeforeExit)).then(() => Deno.exit());
    }

    private async printDatabaseErrorMessageAndExit() {
        console.error("%cWasn't able to connect to the database. Please check your .env file.",
            "color: red; font-weight: bold;");

        await new Promise((resolve) => setTimeout(resolve, this.timeoutBeforeExit)).then(() => Deno.exit());
    }

    private serverStartMessage() {
        console.log(`%cInitializing Horizon Forge Backend...`, "color: #DAA520; font-weight: bold;");
        console.log(`%c-------------------------------------------`, "color: #DAA520");

        console.log(`%cVersion: 0.1.0`, "color: lightgreen");
        console.log(`%cListening on Port: ${this.port}`, "color: lightgreen");
        console.log(`%cDatabase: ${this.databaseHost}/${this.databaseName}:${this.databasePort}`, "color: lightgreen");
        console.log(`%cDatabase User: ${this.databaseUser}`, "color: lightgreen");
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