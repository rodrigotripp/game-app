import { useState, useEffect } from 'react';
import { type provider, type group } from '../types';
import '../styles/filters.css'

type props = {
  providers: provider[]
  groups: group[]
}

export const Filters = ({
  providers,
  groups
}: props) => {
  const [open, setOpen] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState<group[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<provider[]>([]);

  useEffect(() => {}, [selectedProviders, selectedGroups])

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickProv = (arg: provider): void => {
    if (selectedProviders && !selectedProviders?.includes(arg)) {
      setSelectedProviders(
        [
          ...selectedProviders,
          arg
        ]
      )
    }
    else {
      setSelectedProviders(
        [
          ...selectedProviders.filter((prov) => prov !== arg)
        ]
      )
    }
  }

  const handleClickGroup = (arg: group, ): void => {
    if (selectedGroups && !selectedGroups?.includes(arg)) {
      setSelectedGroups(
        [
          ...selectedGroups,
          arg
        ]
      )
    }
    else {
      setSelectedGroups(
        [
          ...selectedGroups.filter((group) => group !== arg)
        ]
      )
    }
  }

  return (
    <div className='filtersContainer'>
      <div className='providers'>
        <h2 onClick={handleOpen}>providers</h2>
        <ul className="menu">
          {providers.map((provider) => {
            return (
              <li
                key={provider.id}
                className={`menu-item ${selectedProviders?.includes(provider) ? 'active' : ''}`}>
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
        <h2 onClick={handleOpen}>groups</h2>
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