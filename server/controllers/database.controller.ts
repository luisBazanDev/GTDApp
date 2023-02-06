import { connect, set } from "mongoose";

export const connectDatabase = () => {
  set("strictQuery", false);

  connect(process.env.MONGO_URI || "mongodb://localhost:27017", {}).then(() => {
    console.log("Database is connected!");
  });
};
