import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/arthrogenix";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * Get connected MongoDB database instance and ensure proper collection indexes
 */
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  const db = client.db();

  // Initialize indexes safely (cached by Mongo engine)
  try {
    const appointments = db.collection("appointments");
    await appointments.createIndex({ referenceNumber: 1 }, { unique: true });
    await appointments.createIndex({ phone: 1 });
    await appointments.createIndex({ status: 1 });
    await appointments.createIndex({ createdAt: -1 });

    const contactEnquiries = db.collection("contact_enquiries");
    await contactEnquiries.createIndex({ referenceNumber: 1 }, { unique: true });
    await contactEnquiries.createIndex({ email: 1 });
    await contactEnquiries.createIndex({ status: 1 });
    await contactEnquiries.createIndex({ createdAt: -1 });
  } catch (err) {
    console.error("Index initialization warning:", err);
  }

  return db;
}

export default clientPromise;
