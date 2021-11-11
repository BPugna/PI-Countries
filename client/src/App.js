import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CountryDetail from './Components/countryDetail/CountryDetail';
import Form from './Components/activity/Form';
import Principal from './Components/countries/Principal';
import Landing from './Components/main/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Landing/>
        </Route>
        <Route exact path="/countries">
            <Principal/>
        </Route>
        <Route path="/countries/:id" component={CountryDetail}/>
        <Route path="/activity">
            <Form/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
