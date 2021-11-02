import Axios from 'axios';
import { useState } from "react";

function App() {
  const [poem, setPoem] = useState({
    title: "",
    author: "",
    lines: ""
  });

  const fetchPoems = () => {
    Axios.get('https://poetrydb.org/title/Ozymandias/lines').then(
      (response) => {
        console.log(response);
        setPoem({
          response
        })
      })
  }

  return (
    <div>
      <h1> Today's poem </h1>
      <button onClick={fetchPoems}>Get Poem</button>
    </div>
  );
}

export default App;

//https://github.com/thundercomb/poetrydb API Documentation
// fix get request (use Ruby as documented)
// force http on json response
// edit UI
// either select random or slect by date - by date would be preferable
