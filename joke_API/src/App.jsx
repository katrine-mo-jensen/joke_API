import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);

  function getJoke() {
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }

  useEffect(() => {
    getJoke;
  }, []);
  console.log("Joke", joke);

  return (
    <>
      <h1>Jokes</h1>
      <div>
        <h3>{joke.setup} </h3>
        <p>{joke.punchline}</p>
        <button onClick={getJoke}>New joke?</button>
      </div>
    </>
  );
}

export default App;
