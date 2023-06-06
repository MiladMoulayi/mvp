import fs from "fs";
import path from "path";

export function buildJokesPath() {
  return path.join(process.cwd(), "data", "jokes.json");
}

export function extractJokes(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const setup = req.body.setup;
    const punchline = req.body.punchline;

    const newJoke = {
      id: new Date().toISOString(),
      setup: setup,
      punchline: punchline,
    };

    const filePath = buildJokesPath();
    const data = extractJokes(filePath);
    data.push(newJoke);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "Success!",
      joke: newJoke,
    });
  } else {
    const filePath = buildJokesPath();
    const data = extractJokes(filePath);
    res.status(200).json({ jokes: data });
  }
}

export default handler;
