import { type group, type dataType, type game } from './types/index';

const findGameInGroup = (selectedGroups: group[], game: game) => {
  for (let group of selectedGroups) {
    if (group.games.includes(game.id)) {
      return true;
    }
    return false;
  }
}

export const filteredData = (
  data: dataType,
  selectedProviders: string[],
  selectedGroups: group[]
) => {
  return data.games.filter(
    (game) => {
      const gameByProv = selectedProviders.includes(String(game.provider));
      const emptySelections = selectedProviders.length === 0 && selectedGroups.length === 0;
      if (gameByProv || findGameInGroup(selectedGroups, game)) {
        return game;
      }

      else if (emptySelections) {
        return game;
      }

      return null
    }
  )
}