import { useEffect, useState } from 'react';
import { Game } from './Game';
import { type game, type provider, type group } from '../types';
import '../styles/grid.css';
import { Filters } from './Filters';

type dataType = {
  games: game[],
  providers: provider[],
  groups: group[]
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
    <div className="gamesContainer">
      <div className="grid">
        {data?.games.map((game) => <Game
          cover={game.cover}
          coverLarge={game.coverLarge}
          date={game.date}
          key={game.id}
          id={game.id}
          name={game.name}
          provider={game.provider} />)}
      </div>
      {
        data ? <Filters
          providers={data.providers}
          groups={data.groups}
        /> :
          null
      }

    </div>
  );
}

export default Grid;
