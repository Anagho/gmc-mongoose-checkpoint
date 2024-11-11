// import mongoose ODM
import mongoose from "mongoose";

// Define the Person schema
const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    favoriteFoods: {
      type: [String],
    },
  },
  { timestamps: true }
);

// Create the model from the schema with collection name as Person
const Person = mongoose.model("Person", personSchema);

// Export the model as a default export
export default Person;
