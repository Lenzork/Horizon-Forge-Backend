class _Item {
    private _id: number;
    private _name: number;
    private _type: number;
    private _description: number;
    private _sellPrice: number;
    private _buyPrice: number;
    private _soulbound: boolean;
    private _isWeapon: boolean
    private _bonusDamage: number;
    private _bonusHealth: number;
    private _bonusDefense: number;
    private _requiredLevel: number;
    private _icon: string;
    private _rarity: string;

    constructor(id: number, name: number, type: number, description: number, sellPrice: number, buyPrice: number, soulbound: boolean, isWeapon: boolean, bonusDamage: number, bonusHealth: number, bonusDefense: number, requiredLevel: number, icon: string, rarity: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._description = description;
        this._sellPrice = sellPrice;
        this._buyPrice = buyPrice;
        this._soulbound = soulbound;
        this._isWeapon = isWeapon;
        this._bonusDamage = bonusDamage;
        this._bonusHealth = bonusHealth;
        this._bonusDefense = bonusDefense;
        this._requiredLevel = requiredLevel;
        this._icon = icon;
        this._rarity = rarity;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): number {
        return this._name;
    }

    set name(value: number) {
        this._name = value;
    }

    get type(): number {
        return this._type;
    }

    set type(value: number) {
        this._type = value;
    }

    get description(): number {
        return this._description;
    }

    set description(value: number) {
        this._description = value;
    }

    get sellPrice(): number {
        return this._sellPrice;
    }

    set sellPrice(value: number) {
        this._sellPrice = value;
    }

    get buyPrice(): number {
        return this._buyPrice;
    }

    set buyPrice(value: number) {
        this._buyPrice = value;
    }

    get soulbound(): boolean {
        return this._soulbound;
    }

    set soulbound(value: boolean) {
        this._soulbound = value;
    }

    get isWeapon(): boolean {
        return this._isWeapon;
    }

    set isWeapon(value: boolean) {
        this._isWeapon = value;
    }

    get bonusDamage(): number {
        return this._bonusDamage;
    }

    set bonusDamage(value: number) {
        this._bonusDamage = value;
    }

    get bonusHealth(): number {
        return this._bonusHealth;
    }

    set bonusHealth(value: number) {
        this._bonusHealth = value;
    }

    get bonusDefense(): number {
        return this._bonusDefense;
    }

    set bonusDefense(value: number) {
        this._bonusDefense = value;
    }

    get requiredLevel(): number {
        return this._requiredLevel;
    }

    set requiredLevel(value: number) {
        this._requiredLevel = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get rarity(): string {
        return this._rarity;
    }

    set rarity(value: string) {
        this._rarity = value;
    }
}