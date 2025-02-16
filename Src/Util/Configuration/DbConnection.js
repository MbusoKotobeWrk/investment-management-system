import "../env/Configuration";
import Pg from "pg";
import { Client as DbClient } from "pg";

export class DbConnection {
    constructor() {
        this.Client = new DbClient({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
    }

    async GetDbConnection() {
        await this.Client.connect();
        return this.Client;
    }
}