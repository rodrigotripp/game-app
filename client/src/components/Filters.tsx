import { useEffect } from 'react';
import { type provider, type group } from '../types';
import '../styles/filters.css'

type props = {
  providers: provider[]
  groups: group[]
  selectedFilters: (group | provider)[];
  setSelectedFilters: (p: (group | provider)[]) => void;
}

export const Filters = ({
  providers,
  groups,
  selectedFilters,
  setSelectedFilters
}: props) => {

  useEffect(() => {
  }, [selectedFilters]);

  const handleClick = (arg: provider | group) => {
    selectedFilters && !selectedFilters?.find((el) => el.id === arg.id)
      ? setSelectedFilters([...selectedFilters, arg])
      : setSelectedFilters([...selectedFilters.filter((el) => el.id !== arg.id)]) 
  }

  type filterProps = group | provider;

  const Filter = (arg: filterProps) => {
    return (
      <li
        className={`menu-item ${!!selectedFilters?.find((el) => el.id === arg.id) ? 'active' : ''}`}>
        <button
          data-id={arg.id}
          id={String(arg.id)}
          onClick={() => handleClick(arg)}>
          {arg.name}
        </button>
      </li>
    )
  }

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