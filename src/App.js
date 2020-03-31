import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Pages
import Landing from './Pages/Landing';
import Navbar from './Pages/Navbar';
import MovieDetails from './Pages/MovieDetails';
// import CaptainAmerica from './Pages/CaptainAmerica';
import reduxStore from './Redux/store';
import history from './Pages/History';

//Main application
function App () {
  return (
    <React.Fragment>
        <Provider store = {reduxStore}>
           
          <Router history={history}>
          <Navbar /> 
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/moviedetails" component={MovieDetails} />
              {/* <Route path="/captainamerica" component={CaptainAmerica} /> */}
            </Switch>
          </Router>
        </Provider>
    </React.Fragment>
  );
}

export default App;
