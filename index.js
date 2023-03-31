import { client, fruitsCollection } from "./mongoConnect.js"

// connect to the client
client.connect();


const addFruits = async () => {
  const myFruit = {
    name: "Avocado",
    taste: "delicious",
    price: 8,
    stock: 20,
  };

  try {
    const addedFruit = await fruitsCollection.insertOne(myFruit);
    console.log(addedFruit);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
  addFruits()


const editFruit = async () => {
  //collection.findOne({name: 'Cantelope'})
  const updatedFruit = await fruitsCollection.findOneAndUpdate(
    { name: "Pear" },
    { $set: { name: "Orange", special: true } }
  );
  console.log(updatedFruit);
};
 // editFruit()


const getAllFruits = async () => {
  
  try {
    await client.connect()
    const allFruits = await fruitsCollection.find().toArray()
    console.log(allFruits)

    } catch (error) {
    console.log(error) 
    } finally {
      await client.close()
    }
};

// getAllFruits();


const deleteFruit = async () => {
  try {
    const itemDelete = await fruitsCollection.deleteOne({ name: "Pineapple" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
 // deleteFruit()


 
