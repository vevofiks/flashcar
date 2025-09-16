import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // @ts-expect-error this may
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        // @ts-expect-error this may
        global._mongoClientPromise = client.connect();
    }
    // @ts-expect-error this may
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
