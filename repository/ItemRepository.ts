import client from "../database.ts";
import { Item } from "../model/Item.ts";

export class ItemRepository extends Item {
    // Lösche ein bestimmtes Item aus der Datenbank
    static async deleteItem(id: number): Promise<void> {
        await client.execute("DELETE FROM items WHERE id = ?", [id]);
    }

    // Hole ein bestimmtes Item aus der Datenbank
    static async getItem(id: number): Promise<Item | null> {
        const items = await client.query("SELECT * FROM `items` WHERE `id` = ?", [id]);

        if (items.length == 0) {
            return null;
        }

        return new Item(
            items[0].id,
            items[0].name,
            items[0].type,
            items[0].description,
            items[0].sellprice,
            items[0].buyprice,
            items[0].soulbound == 1,
            items[0].isWeapon == 1,
            items[0].bonus_damage,
            items[0].bonus_health,
            items[0].bonus_defense,
            items[0].requiredlevel,
            items[0].icon,
            items[0].rarity
        );
    }

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

    // Update ein bestimmtes Item in der Datenbank mit PUT
    static async updateItem(item: Item): Promise<Item> {
        await client.execute("UPDATE items SET name = ?, type = ?, description = ?, sellprice = ?, buyprice = ?, soulbound = ?, isWeapon = ?, bonus_damage = ?, bonus_health = ?, bonus_defense = ?, requiredlevel = ?, icon = ?, rarity = ? WHERE id = ?", [
            item.getId(),
            item.getType(),
            item.getDescription(),
            item.getSellPrice(),
            item.getBuyPrice(),
            item.getSoulbound() ? 1 : 0,
            item.getIsWeapon() ? 1 : 0,
            item.getBonusDamage(),
            item.getBonusHealth(),
            item.getBonusDefense(),
            item.getRequiredLevel(),
            item.getIcon(),
            item.getRarity(),
            item.getId()
        ]);

        return item;
    }

    // Füge ein neues Item in die Datenbank ein mit POST Body
    static async insertItem(item: Item): Promise<Item> {
        await client.execute("INSERT INTO items (name, type, description, sellprice, buyprice, soulbound, isWeapon, bonus_damage, bonus_health, bonus_defense, requiredlevel, icon, rarity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            item.getName(),
            item.getType(),
            item.getDescription(),
            item.getSellPrice(),
            item.getBuyPrice(),
            item.getSoulbound() ? 1 : 0,
            item.getIsWeapon() ? 1 : 0,
            item.getBonusDamage(),
            item.getBonusHealth(),
            item.getBonusDefense(),
            item.getRequiredLevel(),
            item.getIcon(),
            item.getRarity()
        ]);

        return item;
    }
}