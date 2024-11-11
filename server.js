// import dependencies
import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import { createAndSavePerson, createManyPeople, deleteById, deleteManyByName, findAndUpdate, findEditThenSave, findOneByFood, findPeopleByName, findPersonById, queryChain } from "./controllers/personController.js";

const PORT = process.env.PORT || 4000;

const app = express();

// Connect to Database
connectDB();

// Example data and functions
const personData = { name: 'Matthew', age: 30, favoriteFoods: ['Jollof Rice', 'Egusi Soup'] };
const peopleData = [
  { name: "Alice", age: 28, favoriteFoods: ["Vegetable Soup", "Fried Rice"] },
  { name: "Joshua", age: 32, favoriteFoods: ["Yam Porridge", "Moimoi"] },
  { name: "James", age: 29, favoriteFoods: ["porridge Beans", "Fried Plantain"] },
];

// Calling the functions

// (1) - Create and save one person
// createAndSavePerson(personData);

// (2) - Create many people
// createManyPeople(peopleData);

// (3) - Find people by name
// findPeopleByName('Matthew');

// (4) - Find one person by favorite foods
// findOneByFood('Jollof Rice'); 

// (5) - Find one person by ID
// findPersonById("67325e67f3947a7593a15ea7");

// (6) - Find, update, and save a person's favorite foods
// findEditThenSave("67325e67f3947a7593a15ea7");

// (7) - Find and update a person's age by name
// findAndUpdate('Matthew');

// (8) - Delete a person by ID
// deleteById("67325e67f3947a7593a15ea8");

// (9) - Delete many people by name
// deleteManyByName("Alice");

// (10) - Find people who like a specific food, sort, limit, and select fields
// queryChain("Egusi Soup");

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
