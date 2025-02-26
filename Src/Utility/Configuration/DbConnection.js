import dotenv from "dotenv";
import Pg from "pg";
const { Client } = Pg;
import { dirname as DirName, resolve as Resolve } from "path";
import { fileURLToPath as FileURLToPath } from "url";


const __Dirname = DirName(FileURLToPath(import.meta.url));
const EnvPath = Resolve(__Dirname, '../../../.env/Configuration.env');
dotenv.config({ path: EnvPath });

export class DbConnection {
    constructor() {
        this.Client = new Client({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        this.Client.connect();
    }

    async GetDbConnection() {
        return this.Client;
    }
}