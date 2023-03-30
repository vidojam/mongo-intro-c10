import { client } from "./mongoConnect.js";

// connect to the client
client.connect();




const addFruits = async () => {
  const myFruit = {
    name: "Cantelope",
    taste: "sour",
    price: 4,
    stock: 5,
  };
  try {
    const addedFruit = await collection.insertOne(myFruit);
    console.log(addedFruit);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
// addFruits()

const editFruit = async () => {
  //collection.findOne({name: 'Cantelope'})
  const updatedFruit = await collection.findOneAndUpdate(
    { name: "Cantelope" },
    { $set: { name: "Pineapple", special: true } }
  );
  console.log(updatedFruit);
};
 editFruit()

// const getAllFruits = async () => {

// const allFruits = await collection.find().toArray();
// console.log(allFruits);
// }
// getAllFruits()

const deleteFruit = async () => {
  try {
    const itemDelete = await collection.deleteOne({ name: "Pineapple" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
// deleteFruit()

// const getAllFruits = async () => {
//   // const allFruits = await collection.find().array()

//   collection
//     .find()
//     .toArray()
//     .then((items) => console.log(items))
//     .catch((err) => console.log(err));

//   // console.log(allFruits)
// };

// getAllFruits();

const getAllFruits = async () => {
  try {
    await client.connect()
    const allFruits = await collection.find().toArray()
    console.log(allFruits)
    } catch (error) {
    console.log(error) 
    } finally {
      await client.close()
    }
}

