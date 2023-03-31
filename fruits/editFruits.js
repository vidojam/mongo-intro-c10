import { client, fruitsCollection } from'../mongoConnect.js';

client.connect()

const editFruit = async () => {

  const updatedFruit = await fruitsCollection.findOneAndUpdate(
    { name: "Banana" },
    { $set: { name: "Rasberry", special: true }}
  );
  console.log(updatedFruit);
};

 editFruit()
