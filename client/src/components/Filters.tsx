import { useEffect } from 'react';
import { type provider, type group } from '../types';
import '../styles/filters.css'

type props = {
  providers: provider[]
  groups: group[]
  selectedProviders: string[]
  selectedGroups: group[]
  setSelectedProviders: (p: string[]) => void;
  setSelectedGroups: (p: group[]) => void;
}

export const Filters = ({
  providers,
  groups,
  selectedGroups,
  selectedProviders,
  setSelectedGroups,
  setSelectedProviders
}: props) => {

  useEffect(() => {
  }, [selectedProviders, selectedGroups]);

  const handleClickProv = (arg: provider): void => {
    return selectedProviders && !selectedProviders?.includes(String(arg.id))
      ? setSelectedProviders([...selectedProviders, String(arg.id)])
      : setSelectedProviders([...selectedProviders.filter((prov) => prov !== String(arg.id))])
  }

  const handleClickGroup = (arg: group,): void => {
    return selectedGroups && !selectedGroups?.includes(arg)
      ? setSelectedGroups([...selectedGroups, arg])
      : setSelectedGroups([...selectedGroups.filter((group) => group !== arg)]);
  }

  return (
    <div className='filtersContainer'>
      <div className='providers'>
        <h2>providers</h2>
        <ul className="menu">
          {providers.map((provider) => {
            return (
              <li
                key={provider.id}
                className={`menu-item ${selectedProviders?.includes(String(provider.id)) ? 'active' : ''}`}>
                <button
                  data-id={provider.id}
                  id={String(provider.id)}
                  onClick={() => handleClickProv(provider)}>
                  {provider.name}
                </button>
              </li>
            )
          }
          )}
        </ul>
      </div>
      <div className='groups'>
        <h2>groups</h2>
        <ul className="menu">
          {groups.map((group) => {
            return (
              <li
                key={group.id}
                className={`menu-item ${selectedGroups?.includes(group) ? 'active' : ''}`}>
                <button
                  data-games={group.games}
                  data-id={group.id}
                  onClick={() => handleClickGroup(group)}>{group.name}</button>
              </li>)
          }
          )}
        </ul>
      </div>
    </div>
  )
}