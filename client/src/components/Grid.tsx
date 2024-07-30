import { useState } from 'react';
import { Game } from './Game';
import { game, provider, type group } from '../types';
import '../styles/grid.css';
import { Filters } from './Filters';
import { filteredData } from '../utils';
import { dataType } from '../types';

const Grid = (data: dataType) => {
  const [selectedFilters, setSelectedFilter] = useState<group[] | provider[]>([]);

  return (
    <div className="gamesContainer">
      <div className="grid">
        {filteredData(data, selectedFilters).map((game:game) => <Game
          cover={game.cover}
          coverLarge={game.coverLarge}
          date={game.date}
          key={game.id}
          id={game.id}
          name={game.name}
          provider={game.provider} />)}
      </div>
      {
        data ?
          <Filters
            providers={data.providers}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilter}
            groups={data.groups}
          /> :
          null
      }
    </div>
  );
}

export default Grid;
