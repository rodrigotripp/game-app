import { type group, type dataType, type provider } from './types/index';

function checkIfGameInGroup(group: group, id: number) {
  return group.games?.includes(id);
}

export const filteredData = (
  data: dataType,
  selectedFilters: (group | provider)[]
) => {
  if (!selectedFilters.length) {
    return data.games;
  }

  return data.games.filter((game) => {
    return selectedFilters.some((filter) => {
      if ('games' in filter) {
        return checkIfGameInGroup(filter, game.id);
      } else {
        return filter.id === game.provider;
      }
    });
  });
};