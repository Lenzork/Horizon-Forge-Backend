import type { RouterContext } from "https://deno.land/x/oak@v17.1.2/router.ts";

export abstract class APIController {
    private readonly getMethodAllowed: boolean;
    private readonly postMethodAllowed: boolean;
    private readonly putMethodAllowed: boolean;
    private readonly deleteMethodAllowed: boolean

    constructor(get: boolean, post: boolean, put: boolean, del: boolean) {
        this.getMethodAllowed = get;
        this.postMethodAllowed = post;
        this.putMethodAllowed = put;
        this.deleteMethodAllowed = del;
    }

    abstract handleGet(context: RouterContext<string>): void;
    abstract handlePost(context: RouterContext<string>): void;
    abstract handlePut(context: RouterContext<string>): void;
    abstract handleDelete(context: RouterContext<string>): void;

    public isGetMethodAllowed(): boolean {
        return this.getMethodAllowed;
    }

    public isPostMethodAllowed(): boolean {
        return this.postMethodAllowed;
    }

    public isPutMethodAllowed(): boolean {
        return this.putMethodAllowed;
    }

    public isDeleteMethodAllowed(): boolean {
        return this.deleteMethodAllowed;
    }
}