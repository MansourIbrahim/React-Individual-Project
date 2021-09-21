import './App.css';
import { HomePage } from './components/HomePage';
import { MyEventsList } from './components/MyEventsList';
import { HomePageEventsProvider } from './HomePageEventsContext';
import { EventProvider } from './MyEventContext';
import { Nav } from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <HomePageEventsProvider>
          <EventProvider>
            <Switch>
             <Route path="/" exact component={HomePage}/>
             <Route path="/myevents" exact component={MyEventsList}/>
            </Switch>
          </EventProvider>
        </HomePageEventsProvider>
      </div>
    </Router>
  );
}

export default App;
