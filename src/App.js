import './App.css';
import Header from './Header'

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Hello World</h1>

      {/*Header*/} 
      <Header/>
      {/*Sidebar*/}
      {/*React-Router -> Switching btw channels without refreshing*/ }
    </div>
  );
}

export default App;
