function handler(req, res) {
  const jokeId = req.query.id;
  const selectedJoke = jokesData.find((joke) => joke._id === jokeId);
  res.status(200).json({ joke: selectedJoke });
}

export default handler;
