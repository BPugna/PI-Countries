import './App.css';
import Button from './Components/main/Button';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CountryDetail from './Components/countryDetail/CountryDetail';
import ActivityForm from './Components/activity/ActivityForm';
import Home from './Components/countries/Home';
import SearchBar from './Components/countries/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="contenedor"> 
            <Button/>
          </div>
        </Route>
        <Route exact path="/countries">
          <div className="contenedor"> 
            <SearchBar/>
            <Home/>
          </div>
        </Route>
        <Route path="/countries/:id" component={CountryDetail}/>
        <Route path="/activity">
          <div >
            <ActivityForm/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
