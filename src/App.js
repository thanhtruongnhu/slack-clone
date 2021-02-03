import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    // BEM naming convention
    <div className="App">

      {/*Header*/} 
      <Header/>

      {/*Sidebar*/}
      {/*React-Router -> Switching btw channels without refreshing*/ }
      <div className="app_body">
        <Sidebar />
      </div>

    </div>
  );
}

export default App;
