import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

const client = await new Client().connect({
    hostname: Deno.env.get("DATABASE_HOST"),
    username: Deno.env.get("DATABASE_USER"),
    db: Deno.env.get("DATABASE_NAME"),
    password: Deno.env.get("DATABASE_PASSWORD"),
});

export default client;