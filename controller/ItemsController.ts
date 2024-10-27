import type {RouterContext} from "https://deno.land/x/oak@v17.1.2/router.ts";
import {APIController} from "./APIController.ts";
import {ItemRepository} from "../repository/ItemRepository.ts";

export class ItemsController extends APIController {
    handleDelete(_context: RouterContext<string>): void {
    }

    async handleGet(context: RouterContext<string>): Promise<void> {
        context.response.body = await ItemRepository.getAllItems();
    }

    handlePost(_context: RouterContext<string>): void {
    }

    handlePut(_context: RouterContext<string>): void {
    }
}