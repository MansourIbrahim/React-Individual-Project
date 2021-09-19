import './App.css';
import { HomePage } from './components/HomePage';
import { SearchForm } from './components/SearchForm';
import { EventProvider } from './EventContext'

function App() {
  return (
    <div className="App">
      <EventProvider>
        <HomePage />
        <SearchForm />
      </EventProvider>
    </div>
  );
}

export default App;
