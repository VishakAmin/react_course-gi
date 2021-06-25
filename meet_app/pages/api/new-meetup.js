// /api/new-meetup
import {MongoClient}  from 'mongodb';
 

const  handler = async (req, res) => {

  if(req.method === 'POST'){
      const data = req.body;
      // const {title, image, address, description} = data

      const client = await MongoClient.connect("mongodb+srv://admin:fcGl2w6eVNoqaC5p@cluster0.jlfyg.mongodb.net/meetup?retryWrites=true&w=majority")
      const db = client()


      const meetupCollection = db.collection('meetups');

      const result = await meetupCollection.insertOne(data)

      console.log(result);

      client.close()

      res.status(201).json({message: "Meetup inserted"})

    }
}

export default handler;
