import logo from './logo.svg';
import './App.css';
import List from './components/list/List';

function App() {
  const bool = true;
  return (
    <div className={`my-class ${bool && "App"}`}
    style={{backgroundColor : bool ? "green" : "blue"}}>
      <List />
    </div>
  );
}

export default App;
