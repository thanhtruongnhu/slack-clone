import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Chat from "./Chat";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Router>
        <Header/>     
        <div className="app__body">
            <Sidebar />

            {/* Insert a SWITCH: this check which route that you're in. Based on which route you're in, it gonna render the screen accordingly */}
            <Switch>
              <Route path="/room/:roomId">                
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>


            </Switch>
            {/*React-Router DOM -> Switching btw channels without refreshing*/ }
        </div>
      </Router>
    </div>
  );
}

export default App;
