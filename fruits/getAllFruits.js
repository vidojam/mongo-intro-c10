import { client, fruitsCollection } from "../mongoConnect.js";

client.connect();

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

 getAllFruits();



