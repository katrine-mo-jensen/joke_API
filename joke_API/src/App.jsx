import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    const url = "https://official-joke-api.appspot.com/random_ten";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);
  console.log("Joke", joke);

  return (
    <>
      <h1>Jokes</h1>
      {joke.map((item, index) => {
        return (
          <>
            <h3 key={index}>{item.setup} </h3>
            <p>{item.punchline}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
