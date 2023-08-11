import Loki from "lokijs";

const db = new Loki("myDatabase");
type Users = {
    name: string;
    owner: string;
    maker: string;
  }

const users = db.addCollection<Users>("users");

// Add some documents to the collection
users.insert({ name: "mjolnir", owner: "thor", maker: "dwarves" });
users.insert({ name: "gungnir", owner: "odin", maker: "elves" });
users.insert({ name: "tyrfing", owner: "Svafrlami", maker: "dwarves" });
users.insert({ name: "draupnir", owner: "odin", maker: "elves" });

export default db;
