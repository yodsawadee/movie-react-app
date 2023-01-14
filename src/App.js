import './App.css';

const App = () => {
  const name = "JAN";
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>{2+2}</h1>
      <h1>Hello, {isNameShowing ? name : 'Someone'}</h1>
      {name ? (
        <>{name}</>
      ) : (
        <>
          <h1>test2</h1>
          <h2>there is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
