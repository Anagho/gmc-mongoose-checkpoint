import Person from '../models/personModel.js';

// export async function createAndSavePerson(personData) {
//   const person = new Person(personData);
//   await person.save();
//   console.log("Person saved:", person)
// }


// Function to create and save a single person record
export async function createAndSavePerson(personData) {
  try {
    const person = new Person(personData);
    const savedPerson = await person.save(personData);
    console.log("Person saved:", savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
  }
}

//  Function to create multiple people at once
export async function createManyPeople(arrayOfPeople) {
  try {
    const savedPeople = await Person.create(arrayOfPeople);
    console.log('People created:', savedPeople);
  } catch (error) {
    console.error('Error creating people:', error);
  }
}

// Function to find people by name
export async function findPeopleByName(personName) {
  try {
    const people = await Person.find({ name: personName });
    console.log('People found:', people);
  } catch (error) {
    console.error('Error finding people by name:', error);
  }
}

// Function to find one person by favorite food
export async function findOneByFood(food) {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log('Person found by food:', person);
  } catch (error) {
    console.error('Error finding person by food:', error);
  }
}

// Function to find a person by ID
export async function findPersonById(personId) {
  try {
    const person = await Person.findById(personId);
    console.log('Person found by ID:', person);
  } catch (error) {
    console.error('Error finding person by ID:', error);
  }
}

// Function to find, update, and save a person's favorite foods
export async function findEditThenSave(personId) {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push('hamburger');
    const updatedPerson = await person.save();
    console.log('Updated person:', updatedPerson);
  } catch (error) {
    console.error('Error updating person:', error);
  }
}

// Function to find and update a person's age by name
export async function findAndUpdate(personName) {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log('Updated person by name:', updatedPerson);
  } catch (error) {
    console.error('Error updating person by name:', error);
  }
}

// Function to delete a person by ID
export async function deleteById(personId) {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log('Deleted person:', deletedPerson);
  } catch (error) {
    console.error('Error deleting person by ID:', error);
  }
}

// Function to delete many people by name
export async function deleteManyByName(name) {
  try {
    const result = await Person.deleteMany({ name });
    console.log('People deleted:', result);
  } catch (error) {
    console.error('Error deleting people by name:', error);
  }
}

// Function to find people who like a specific food, sort, limit, and select fields
export async function queryChain(food) {
  try {
    const people = await Person.find({ favoriteFoods: food })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec();
    console.log('Query result:', people);
    return people;
  } catch (error) {
    console.error('Error querying people:', error);
  }
}