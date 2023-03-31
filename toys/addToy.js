import { client, toysCollection } from'../mongoConnect.js'

client.connect()
 
const addToy = async() => {
  // get collection?

  const myToy = {
    name: 'Chess',
    type: 'Board',
    cool: true,
    price: 25,
    description: 'In chess, each player takes turns to make a single move. Each chess piece moves in a specific way, and must be moved according to its legal movement.'
  }

  const addedtoy = await toysCollection.insertOne(myToy)
  console.log(addedtoy)
}

addToy()