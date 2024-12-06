import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is undefined");
}

const DB_NAME = "cs391-OAuth";
export const PROFILES = "profiles";

let client: MongoClient;
let db: Db | null = null;

async function connect(): Promise<MongoClient> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client;
}
export {connect};

client = new MongoClient(MONGO_URI);
export default client;

