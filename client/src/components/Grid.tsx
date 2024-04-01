import { useEffect, useState } from 'react';
import { Game } from './Game';
import { type game, type provider, type group } from '../types';
import '../styles/grid.css';

type dataType = {
  games:[game],
  providers: [provider],
  groups: [group]
}

const Grid = () => {
  const [data, setData] = useState<dataType>();
  useEffect(() => {
    fetch("http://localhost:3080/all")
      .then(r => r.json())
      .then(r => {
        setData(r);
      })
  }, [])

  return (
    <div className="grid">
      {data?.games.map((game) => <Game 
        cover={game.cover} 
        coverLarge={''} 
        date={game.date} 
        key={game.id}
        id={game.id} 
        name={game.name} 
        provider={game.provider}/>)}
    </div>
  );
}

export default Grid;
