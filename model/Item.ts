export class Item {
    protected id: number | undefined;
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

    constructor(id: number | undefined, name: string, type: number, description: string, sellPrice: number, buyPrice: number,
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

    public getId(): number | undefined {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): number {
        return this.type;
    }

    public getDescription(): string {
        return this.description;
    }

    public getSellPrice(): number {
        return this.sellPrice;
    }

    public getBuyPrice(): number {
        return this.buyPrice;
    }

    public getSoulbound(): boolean {
        return this.soulbound;
    }

    public getIsWeapon(): boolean {
        return this.isWeapon;
    }

    public getBonusDamage(): number {
        return this.bonusDamage;
    }

    public getBonusHealth(): number {
        return this.bonusHealth;
    }

    public getBonusDefense(): number {
        return this.bonusDefense;
    }

    public getRequiredLevel(): number {
        return this.requiredLevel;
    }

    public getIcon(): string {
        return this.icon;
    }

    public getRarity(): string {
        return this.rarity;
    }
}