import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;

  try {
    client = await MongoClient.connect(process.env.DB_AUTH);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database" });
    return;
  }

  if (req.method === "POST") {
    const { setup, punchline } = req.body;

    const newJoke = {
      setup: setup,
      punchline: punchline,
    };

    const db = client.db();

    try {
      const result = await db.collection("jokes").insertOne(newJoke);
      newJoke.id = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Hold up! Our database broke it's funny bone..." });
    }

    res.status(201).json({
      message: "You're hilarious!",
      joke: newJoke,
    });
  }

  if (req.method === "GET") {
    const db = client.db();
    let jokesData;
    try {
      jokesData = await db
        .collection("jokes")
        .find()
        .sort({ _id: -1 })
        .toArray();
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Hold up! Our database broke it's funny bone..." });
    }
    res.status(200).json({ jokes: jokesData });
  }

  client.close();
}

export default handler;
