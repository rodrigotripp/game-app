import { useEffect, useState } from 'react';
import { Game } from './Game';
import { type game, type provider, type group } from '../types';
import '../styles/grid.css';
import { Filters } from './Filters';
import { filteredData } from '../utils';

type dataType = {
  games: game[],
  providers: provider[],
  groups: group[]
}

const Grid = () => {
  const [data, setData] = useState<dataType>({
    games: [],
    providers: [],
    groups: []
  });
  const [selectedGroups, setSelectedGroups] = useState<group[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3080/all")
      .then(r => r.json())
      .then(r => {
        setData(r);
      });
  }, [])

  return (
    <div className="gamesContainer">
      <div className="grid">
        {filteredData(data, selectedProviders, selectedGroups).map((game) => <Game
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
          selectedProviders={selectedProviders}
          selectedGroups={selectedGroups}
          setSelectedProviders={setSelectedProviders}
          setSelectedGroups={setSelectedGroups}
          groups={data.groups}
        /> :
          null
      }
    </div>
  );
}

export default Grid;
