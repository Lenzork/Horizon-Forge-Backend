export class Item {
    protected id: number;
    protected name: string;
    protected type: number;
    protected description: string;
    protected sellPrice: number;
    protected buyPrice: number;
    protected soulbound: boolean;
    protected isWeapon: boolean
    protected bonusDamage: number;
    protected bonusHealth: number;
    protected bonusDefense: number;
    protected requiredLevel: number;
    protected icon: string;
    protected rarity: string;

    constructor(id: number, name: string, type: number, description: string, sellPrice: number, buyPrice: number,
                soulbound: boolean, isWeapon: boolean, bonusDamage: number, bonusHealth: number, bonusDefense: number,
                requiredLevel: number, icon: string, rarity: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        this.soulbound = soulbound;
        this.isWeapon = isWeapon;
        this.bonusDamage = bonusDamage;
        this.bonusHealth = bonusHealth;
        this.bonusDefense = bonusDefense;
        this.requiredLevel = requiredLevel;
        this.icon = icon;
        this.rarity = rarity;
    }
}