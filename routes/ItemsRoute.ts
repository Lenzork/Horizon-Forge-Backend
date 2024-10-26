import { APIRoute } from "./APIRoute.ts";
import { ItemsController } from "../controller/ItemsController.ts";

export class ItemsRoute extends APIRoute {
    constructor() {
        super("items", new ItemsController(true, true, true, true));
    }
}