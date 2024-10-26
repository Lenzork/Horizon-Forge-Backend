import globalRouter from "./GlobalRouter.ts";
import { APIController } from "../controller/APIController.ts";

/**
 * @description Abstract class for creating routes
 */
export abstract class APIRoute {
    private static routes: APIRoute[] = [];

    protected constructor(route: string, routeController: APIController) {
        APIRoute.routes.push(this);
        console.log(`Created route /${route}`);

        if (routeController.isGetMethodAllowed()) globalRouter.get('/' + route, (context) => routeController.handleGet(context));
        if (routeController.isPostMethodAllowed()) globalRouter.post('/' + route, (context) => routeController.handlePost(context));
        if (routeController.isPutMethodAllowed()) globalRouter.put('/' + route, (context) => routeController.handlePut(context));
        if (routeController.isDeleteMethodAllowed()) globalRouter.delete('/' + route, (context) => routeController.handleDelete(context));
    }

    public static getRoutes(): APIRoute[] {
        return this.routes;
    }
}