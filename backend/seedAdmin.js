import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_EMAIL) {
    console.log("ADMIN_EMAIL or ADMIN_PASSWORD missing in .env");
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });

  if (!exists) {
    await Admin.create({ email: process.env.ADMIN_EMAIL, password: hashedPassword });
    console.log("Admin seeded successfully!");
  } else {
    console.log("Admin already exists");
  }
  process.exit();
}).catch(err => console.log(err));
