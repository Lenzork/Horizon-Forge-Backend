import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

const client = await new Client().connect({
    hostname: Deno.env.get("DATABASE_HOST") || "localhost",
    username: Deno.env.get("DATABASE_USER") || "root",
    db: Deno.env.get("DATABASE_NAME") || "antropa",
    password: Deno.env.get("DATABASE_PASSWORD") || "root",
});

export default client;