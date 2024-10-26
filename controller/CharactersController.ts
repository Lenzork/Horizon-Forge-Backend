import type { RouterContext } from "https://deno.land/x/oak@v17.1.2/router.ts";
import { APIController } from "./APIController.ts";

export class CharactersController extends APIController {
  override handleDelete(context: RouterContext<string>): void {
    context.response.body = "CharactersController.handleDelete";
  }
  override handlePut(context: RouterContext<string>): void {
    context.response.body = "CharactersController.handlePut";
  }
  override handlePost(context: RouterContext<string>): void {
    context.response.body = "CharactersController.handlePost";
  }
  override handleGet(context: RouterContext<string>): void {
    context.response.body = "CharactersController.handleGet";
  }
}