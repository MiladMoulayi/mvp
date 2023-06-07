import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { setup, punchline } = req.body;

    const newJoke = {
      setup: setup,
      punchline: punchline,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://milad:WxvxmCo8HlrVRXAk@cluster0.hl61p42.mongodb.net/next-jokes?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

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

    client.close();

    res.status(201).json({
      message: "You're hilarious!",
      joke: newJoke,
    });
  }
}

export default handler;
