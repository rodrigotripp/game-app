import { type game } from '../types';

export const Game = (props: game) => {
  const {
    date,
    cover,
    coverLarge,
    id,
    provider,
    name,
  } = props; 
  return (
    <figure>
      <img 
        id={String(id)} 
        alt={name} 
        src={cover} 
        data-date={String(date)} 
        data-provider={provider}
      />
      <figcaption>{name}</figcaption>
    </figure>
  )
}
