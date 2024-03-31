
import { useEffect } from 'react';

const Grid = () => {

  useEffect(() => {
    fetch("http://localhost:3080/games")
      .then(r => {
        console.log('Hola', r)
        return r;
      })
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default Grid;
