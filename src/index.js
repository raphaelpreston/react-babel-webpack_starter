import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import './style.scss';

import * as api from './components/apiURLs';


const Welcome = (props) => {
  return <div>Welcome</div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><NavLink to={api.HOME} exact>Home</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={api.HOME} component={Welcome} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
