import Loki from "lokijs";

const db = new Loki("myDatabase");
const users = db.addCollection("users");

// Add some documents to the collection
users.insert({ name: "mjolnir", owner: "thor", maker: "dwarves" });
users.insert({ name: "gungnir", owner: "odin", maker: "elves" });
users.insert({ name: "tyrfing", owner: "Svafrlami", maker: "dwarves" });
users.insert({ name: "draupnir", owner: "odin", maker: "elves" });

export default db;
