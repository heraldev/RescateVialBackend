const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

let client;

if (process.env.NODE_ENV === "test") {
  client = {
    db: () => ({
      command: async () => ({ ok: 1 })
    }),
    connect: async () => {},
    close: async () => {}
  };
} else {
  const uri = process.env.MONGOAtlas;

  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    serverSelectionTimeoutMS: 5000
  });

  async function connectMongo() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Conectado a MongoDB Atlas");
    } catch (error) {
      console.error("Error en MongoDB:", error.message);
    }
  }

  connectMongo();
}

module.exports = client;
