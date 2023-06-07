import Entry from "../../../models/EntryModel";
import connectMongo from "../../../utils/connectMongo";

export default async function addEntry(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo;
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    console.log;
    const entry = await Entry.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ entry });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

// async function handler(req, res) {
//   let client;

//   try {
//     client = await MongoClient.connect(process.env.DB_AUTH);
//   } catch (error) {
//     res.status(500).json({ message: "Could not connect to database" });
//     return;
//   }

//   if (req.method === "POST") {
//     const { setup, punchline } = req.body;

//     const newJoke = {
//       setup: setup,
//       punchline: punchline,
//     };

//     const db = client.db();

//     try {
//       const result = await db.collection("jokes").insertOne(newJoke);
//       newJoke.id = result.insertedId;
//     } catch (error) {
//       client.close();
//       res
//         .status(500)
//         .json({ message: "Hold up! Our database broke it's funny bone..." });
//     }

//     res.status(201).json({
//       message: "You're hilarious!",
//       joke: newJoke,
//     });
//   }

//   if (req.method === "GET") {
//     const db = client.db();
//     let jokesData;
//     try {
//       jokesData = await db
//         .collection("jokes")
//         .find()
//         .sort({ _id: -1 })
//         .toArray();
//     } catch (error) {
//       client.close();
//       res
//         .status(500)
//         .json({ message: "Hold up! Our database broke it's funny bone..." });
//     }
//     res.status(200).json({ jokes: jokesData });
//   }

//   client.close();
// }

// export default handler;
