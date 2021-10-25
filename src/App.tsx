import { VFC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navigation } from './components';
import { NocProvider, ResultProvider} from './contexts';
import { Calculations, Home } from './pages';

const App:VFC = () => {
  return (
    <NocProvider>
      <ResultProvider>
        <Router>
         <Navigation />
          <Switch>
            <Route path="/calculations">
              <Calculations />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </ResultProvider>
    </NocProvider>
  );
}

export default App;
