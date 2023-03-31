import { client, toysCollection } from'../mongoConnect.js';

client.connect()

const editToy = async () => {

  const updatedToy = await toysCollection.findOneAndUpdate(
    { name: "Scabble" },
    { $set: { name: "Chess", special: true }}
  );
  console.log(updatedToy);
};

 editToy()