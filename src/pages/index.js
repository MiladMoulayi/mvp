import { useRef, useState } from "react";

function HomePage() {
  const [jokes, setJokes] = useState([]);

  const setupRef = useRef();
  const punchlineRef = useRef();

  function submitFormHandler(e) {
    e.preventDefault();

    const enteredSetup = setupRef.current.value;
    const enteredPunchline = punchlineRef.current.value;

    const reqBody = { setup: enteredSetup, punchline: enteredPunchline };

    fetch("/api/jokes", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadJokesHandler() {
    fetch("/api/jokes")
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="setup">Write something funny!</label>
          <textarea id="setup" rows="5" ref={setupRef}></textarea>
        </div>
        <div>
          <label htmlFor="punchline">
            This punchline better be worth it...
          </label>
          <input type="text" id="punchline" ref={punchlineRef} />
        </div>
        <button>Add Funny</button>
      </form>
      <hr />
      <button onClick={loadJokesHandler}>Get All of the Jokes!</button>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.setup}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
