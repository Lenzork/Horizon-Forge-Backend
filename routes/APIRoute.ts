import globalRouter from "./GlobalRouter.ts";
import { APIController } from "../controller/APIController.ts";

/**
 * @description Abstract class for creating routes
 */
export abstract class APIRoute {
    protected constructor(route: string, routeController: APIController) {
        if (routeController.isGetMethodAllowed()) globalRouter.get('/api/' + route, (context) => routeController.handleGet(context));
        if (routeController.isPostMethodAllowed()) globalRouter.post('/api/' + route, (context) => routeController.handlePost(context));
        if (routeController.isPutMethodAllowed()) globalRouter.put('/api/' + route, (context) => routeController.handlePut(context));
        if (routeController.isDeleteMethodAllowed()) globalRouter.delete('/api/' + route, (context) => routeController.handleDelete(context));
    }
}