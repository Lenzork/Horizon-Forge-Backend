// Imports
import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { CharactersRoute } from "./routes/CharactersRoute.ts";
import { ItemsRoute } from "./routes/ItemsRoute.ts";
import globalRouter from "./routes/GlobalRouter.ts";

// Create Routes
new CharactersRoute();
new ItemsRoute();

// Create the application
const app = new Application()
      .use(globalRouter.routes())
      .use(globalRouter.allowedMethods());

// Start the server
try {
  await app.listen({ port: 8000 });
} catch (exception) {
  console.error(exception);
}