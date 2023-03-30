import { client, fruitsCollection } from'../mongoConnect.js'

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

