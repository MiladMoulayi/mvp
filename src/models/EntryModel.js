import { Schema, model, models } from "mongoose";

const EntrySchema = new Schema({
  setup: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
});

const Entry = models.Entry || model("Entry", EntrySchema);

export default Entry;
