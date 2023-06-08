import { Schema, model, models } from "mongoose";

const CounterSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const Counter = models.Counter || model("Counter", CounterSchema);

export default Counter;
