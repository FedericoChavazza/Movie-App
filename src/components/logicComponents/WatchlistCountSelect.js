export function WatchlistCountSelect({ setState }) {
  const selectArray = [
    {
      value: 6,
    },
    {
      value: 5,
    },
    {
      value: 4,
    },
    {
      value: 3,
    },
    {
      value: 2,
    },
    {
      value: 1,
    },
  ];

  return (
    <select className="Watchlist__select" onChange={e => setState(e.target.value)}>
      {selectArray.map(option => {
        return <option value={option.value}> {option.value} </option>;
      })}
    </select>
  );
}
