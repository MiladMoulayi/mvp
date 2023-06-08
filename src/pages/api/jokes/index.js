import {
  addJoke,
  deleteJoke,
  editJoke,
  getJokes,
} from "../controllers/controllers";

async function handler(req, res) {
  if (req.method === "GET") {
    const getJokesResponse = await getJokes(req, res);
    res.send(getJokesResponse);
  }
  if (req.method === "POST") {
    const addJokeResponse = await addJoke(req, res);
    res.send(addJokeResponse);
  }
  if (req.method === "PUT") {
    const editJokeResponse = await editJoke(req, res);
    res.send(editJokeResponse);
  }
  // if (req.method === "DELETE") {
  //   const deleteJokeResponse = await deleteJoke(req, res);
  //   res.send(deleteJokeResponse);
  // }
}

export default handler;
