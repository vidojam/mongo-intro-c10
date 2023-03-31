import { client, toysCollection } from '../mongoConnect.js';


const deleteFruit = async () => {
  try {
    await client.connect()
    const itemDelete = await toysCollection.deleteOne({ name: "Pacman" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

 deleteFruit()