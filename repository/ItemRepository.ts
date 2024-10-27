import client from "../database.ts";
import { Item } from "../model/Item.ts";

export class ItemRepository extends Item {
    static async getAllItems(): Promise<Item[]> {
        const items = await client.query("SELECT * FROM items");
        return items.map((item: {id: number, name: string, type: number, description: string, sellprice: number,
        buyprice: number, soulbound: number, isWeapon: number, bonus_damage: number, bonus_health: number,
        bonus_defense: number, requiredlevel: number, icon: string, rarity: string}) => new Item(
            item.id,
            item.name,
            item.type,
            item.description,
            item.sellprice,
            item.buyprice,
            item.soulbound == 1,
            item.isWeapon == 1,
            item.bonus_damage,
            item.bonus_health,
            item.bonus_defense,
            item.requiredlevel,
            item.icon,
            item.rarity
        ));
    }
}