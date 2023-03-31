import { client, fruitsCollection } from'../mongoConnect.js';


const addFruits = async () => {
  const myFruit = {
    name: "Blueberries",
    taste: "delicious",
    price: 8,
    stock: 10,
  };

  try {
    await client.connect();
    const addedFruit = await fruitsCollection.insertOne(myFruit);
    console.log(addedFruit);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
 addFruits()

