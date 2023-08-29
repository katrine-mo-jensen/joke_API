import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);
  
  useEffect(() => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);
  console.log("Joke", joke);

  return (
    <>
      <h1>Jokes</h1>
      <form>
            <h3>{joke.setup} </h3>
            <p>{joke.punchline}</p>
            <button>New joke?</button>
          </form>
    
    </>
  );
}

export default App;
