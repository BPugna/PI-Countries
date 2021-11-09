import './App.css';
import Button from './Components/main/Button';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CountryDetail from './Components/countryDetail/CountryDetail';
import Form from './Components/activity/Form';
import Principal from './Components/countries/Principal';

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
            <Principal/>
          </div>
        </Route>
        <Route path="/countries/:id" component={CountryDetail}/>
        <Route path="/activity">
          <div >
            <Form/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
