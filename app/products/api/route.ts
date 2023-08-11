// pages/api/users.js
import db from "../../../utils/db";
import { NextResponse } from "next/server";
type Users = {
  name: string;
  owner: string;
  maker: string;
}

export async function GET() {
  const users = db.getCollection<Users>("users"),
        count = users.count();
  for (let i = count + 1; i < count + 10; i++) {
    users.insert({
      name: "mjolnir " + i,
      owner: "thor" + i,
      maker: "dwarves" + i,
    });
  }
  const allUsers = users.find({name: "tet"});
  return NextResponse.json(allUsers);
}
