import { Schema, model } from "mongoose";

const schema = new Schema({
  username: String,
  displayName: {
    type: String,
    default: null,
  },
  password: String,
  avatarURL: {
    type: String,
    default: "https://imgur.com/aCFVRPJ.jpeg",
  },
});

export default model("users", schema);
