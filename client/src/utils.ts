import { type group, type dataType, type provider } from './types/index';

function checkIfGameInGroup(group: group, id: number) {
  return group.games?.includes(id);
}

export const filteredData = (
  data: dataType,
  selectedFilters: (group | provider)[]
) => {

  return data.games.filter(
    (game) => {
      // no selection
      if (!selectedFilters.length) {
        return game;
      }
      // when filtered
      return selectedFilters.find((filter) => {
        if (Object.hasOwn(filter, 'games')) {
          return checkIfGameInGroup(filter, game.id) ? game : null;
        }

        else {
          return !!selectedFilters.find((filter) => filter.id === game.provider) ? game : null
        }
      })

    }
  )
}