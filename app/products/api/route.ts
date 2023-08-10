// pages/api/users.js
import db from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const users = db.getCollection("users");
  for (let i = 1; i < 100000; i++) {
    users.insert({ name: "mjolnir", owner: "thor" + i, maker: "dwarves" + i });
  }
  const allUsers = users.find({ name: "mjolnir" });
  return NextResponse.json({ size: allUsers.length });
}
