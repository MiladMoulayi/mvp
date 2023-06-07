function handler(req, res) {
  const jokeId = req.query.jokeId;
  const selectedJoke = jokesData.find((joke) => joke.id === jokeId);
  res.status(200).json({ joke: selectedJoke });
}

export default handler;
