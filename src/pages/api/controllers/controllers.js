import Counter from "../../../models/CounterModel";
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
    const cd = await Counter.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true }
    );
    let seqId;
    if (cd === null) {
      const newVal = new Counter({ id: "autoval", seq: 1 });
      newVal.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }
    console.log("req.body: ", req.body);
    const { setup, punchline } = req.body;
    const entry = new Entry({
      setup: setup,
      punchline: punchline,
      _id: seqId,
    });
    await entry.save();
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
    const { _id, update } = req.body;
    const foundDocument = await Entry.findByIdAndUpdate(_id, update);
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
    const { id } = req.body;
    console.log(req.body);
    const foundDocument = await Entry.findByIdAndDelete(9);
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
