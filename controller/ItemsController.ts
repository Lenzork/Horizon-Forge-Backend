import type { RouterContext } from "https://deno.land/x/oak@v17.1.2/router.ts";
import { APIController } from "./APIController.ts";

export class ItemsController extends APIController {
    handleDelete(_context: RouterContext<string>): void {
    }

    handleGet(_context: RouterContext<string>): void {
    }

    handlePost(_context: RouterContext<string>): void {
    }

    handlePut(_context: RouterContext<string>): void {
    }
}