import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat";
import Login from "./Login"
import { useStateValue } from './StateProvider';

function App() {
  
  // useStateValue is used to pull from the datalayer
  // useStateValue uses the data from the reducer. And in reducer.js, the initialState value is null.
  // Why useStateValue could pull data from reducer??? -> Answer: becuz userStateValue and reducer datalayer (StateContext) is under the same scope: StateProvider.js
  const [{ user }, dispatch] = useStateValue()

  return (
    // BEM naming convention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
              <Header />
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
                {/*React-Router DOM -> Switching btw channels without refreshing*/}
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
