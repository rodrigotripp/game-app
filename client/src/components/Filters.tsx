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
  selectedFilters: string[];
  setSelectedFilters: (p: string[]) => void;
}

export const Filters = ({
  providers,
  groups,
  selectedGroups,
  selectedProviders,
  selectedFilters,
  setSelectedGroups,
  setSelectedProviders,
  setSelectedFilters
}: props) => {

  useEffect(() => {

    

  }, [selectedFilters]);

  const handleClick = (arg: provider | group) => {
    selectedFilters && !selectedFilters?.includes(arg.name)
      ? setSelectedFilters([...selectedFilters, arg.name])
      : setSelectedFilters([...selectedFilters.filter((el) => el !== arg.name)])
  }

  type filterProps = group | provider;

  const Filter = (arg: filterProps) => (
    <li
      className={`menu-item ${selectedFilters?.includes(String(arg.name)) ? 'active' : ''}`}>
      <button
        data-id={arg.id}
        id={String(arg.id)}
        onClick={() => handleClick(arg)}>
        {arg.name}
      </button>
    </li>
  )

  return (
    <div className='filtersContainer'>
      <div className='providers'>
        <h2>providers</h2>
        <ul className="menu">
          {providers.map((provider) => <Filter key={provider.id} {...provider} />)}
        </ul>
      </div>
      <div className='groups'>
        <h2>groups</h2>
        <ul className="menu">
          {groups.map((group) => <Filter key={group.id} {...group} />)}
        </ul>
      </div>
    </div>
  )
}