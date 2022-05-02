import { selectArray } from 'mappings/selectMap';

export function WatchlistCountArray({ setState }) {
  return (
    <select className="Watchlist__select" onChange={e => setState(e.target.value)}>
      {selectArray.map(option => {
        return <option value={option.value}> {option.value} </option>;
      })}
    </select>
  );
}
