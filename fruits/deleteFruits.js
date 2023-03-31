import { client, toysCollection } from '../mongoConnect.js';


const deleteToy = async () => {
  try {
    await client.connect()
    const itemDelete = await toysCollection.deleteOne({ name: "Grapes" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

 deleteToy()

