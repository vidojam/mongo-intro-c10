import { client, toysCollection } from'../mongoConnect.js'

client.connect()
 
const addToy = async() => {
  // get collection?

  const myToy = {
    name: 'Optumus Prime',
    type: 'Transformer',
    cool: true,
    price: 40,
    desscription: 'Leader Autobot, real cool blue semi truck, with'
  }

  const addedtoy = await toysCollection.insertOne(myToy)
  console.log(addedToy)
}

addToy()