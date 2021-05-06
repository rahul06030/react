// import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Login from './components/Login';
import Dashborad from './components/Dashboard';
import {UserInfo} from './components/UserInfo';

const engine = new Styletron();

function App() {
  return (
    
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserInfo}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashborad}></Route>
          </Switch>
        </BrowserRouter>
    </BaseProvider>
  </StyletronProvider>
  );
}

export default App;
