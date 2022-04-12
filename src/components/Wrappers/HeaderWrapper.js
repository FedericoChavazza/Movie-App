import 'pages/Home/styles.scss';

export function HeaderWrap({ children }) {
  return (
    <div className="Homepage-container">
      {' '}
      <div className="Homepage-container__header"></div>
      <> {children} </>{' '}
    </div>
  );
}
