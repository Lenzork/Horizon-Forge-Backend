import { APIRoute } from "./APIRoute.ts";
import { CharactersController } from "../controller/CharactersController.ts";

export class CharactersRoute extends APIRoute {
    constructor() {
        super("characters", new CharactersController(true, true, true, true));
    }
}