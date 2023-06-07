import Entry from "../../../models/EntryModel";
import connectMongo from "../../../utils/connectMongo";

async function getJokes(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo;
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING JOKES");
    const jokes = await Entry.find();
    console.log("FETCHED DOCUMENT");
    return res.json({ jokes });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
}

async function addJoke(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo;
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const entry = await Entry.create(req.body);
    console.log("CREATED DOCUMENT");

    return res.json({ entry });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
}

async function editJoke(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo;
    console.log("CONNECTED TO MONGO");

    console.log("UPDATING JOKE");
    const { query, update } = req.body;
    const foundDocument = await Entry.findOneAndUpdate(query, update);
    if (!foundDocument) {
      console.log("NO ITEMS MATCHED QUERY");
      return res.status(500).send("No items matched query!");
    } else {
      console.log("UPDATED DOCUMENT");
      return res.json({ foundDocument });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
}

async function deleteJoke(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo;
    console.log("CONNECTED TO MONGO");

    console.log("DELETING JOKE");
    const { query } = req.body;
    const foundDocument = await Entry.findOneAndDelete(query);
    if (!foundDocument) {
      console.log("NO ITEMS MATCHED QUERY");
      return res.status(500).send("No items matched query!");
    } else {
      console.log("DELETED DOCUMENT");
      return res.json({ foundDocument });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
}

export { getJokes, addJoke, editJoke, deleteJoke };
