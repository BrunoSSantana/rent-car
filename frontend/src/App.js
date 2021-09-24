import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';
import UserPerfil from './pages/UserPerfil';
import UserMyCars from './pages/UserMyCars';
import UserRent from './pages/UserRent';

function App() {

  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/user' exact component={User} />
        <Route path='/user/perfil' exact component={UserPerfil} />
        <Route path='/user/mycars' exact component={UserMyCars} />
        <Route path='/user/mycars/rent' exact component={UserRent} />
      </Switch>
    </>
  );
}

export default App;