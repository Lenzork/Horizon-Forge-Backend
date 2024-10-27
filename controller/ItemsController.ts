import type {RouterContext} from "https://deno.land/x/oak@v17.1.2/router.ts";
import {APIController} from "./APIController.ts";
import {ItemRepository} from "../repository/ItemRepository.ts";
import { Item } from "../model/Item.ts";

export class ItemsController extends APIController {
    async handleDelete(context: RouterContext<string>): Promise<void> {
        if (context.request.url.searchParams.has("id")) {
            const itemId = Number(context.request.url.searchParams.get("id"));
            if (itemId) {
                await ItemRepository.deleteItem(itemId).finally(() => {
                    context.response.body = "Item deleted";
                });
            }
        } else {
            context.response.body = "No ID provided";
        }
    }

    async handleGet(context: RouterContext<string>): Promise<void> {
        if (context.request.url.searchParams.has("id")) {
            const itemId= Number(context.request.url.searchParams.get("id"));
            const item = await ItemRepository.getItem(itemId);
            if(item) {
                context.response.body = item;
            } else {
                context.response.body = "Item not found";
            }
        } else {
            context.response.body = await ItemRepository.getAllItems();
        }
    }

    async handlePost(context: RouterContext<string>): Promise<void> {
        const body = await context.request.body.json();
        const newItem = new Item(
            undefined,
            body.name,
            body.type,
            body.description,
            body.sellPrice,
            body.buyPrice,
            body.soulbound,
            body.isWeapon,
            body.bonusDamage,
            body.bonusHealth,
            body.bonusDefense,
            body.requiredLevel,
            body.icon,
            body.rarity
        );

        context.response.body = await ItemRepository.insertItem(newItem);
    }

    async handlePut(context: RouterContext<string>): Promise<void> {
        if(context.request.url.searchParams.has("id")) {
            const body = await context.request.body.json();
            const id: number = Number(context.request.url.searchParams.get("id"));
            const updatedItem = new Item(
                id,
                body.name,
                body.type,
                body.description,
                body.sellPrice,
                body.buyPrice,
                body.soulbound,
                body.isWeapon,
                body.bonusDamage,
                body.bonusHealth,
                body.bonusDefense,
                body.requiredLevel,
                body.icon,
                body.rarity
            );
            context.response.body = await ItemRepository.updateItem(updatedItem);
        } else {
            context.response.body = "No ID provided";
        }
    }
}