import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Home from "./pages/Home/";
import User from "./pages/User";
import UserPerfil from "./pages/UserPerfil";
import UserMyCars from "./pages/UserMyCars";
import UserRent from "./pages/UserRent";
import UserMyCarsEdit from "./pages/UserMyCarsEdit";

import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/user/perfil" exact component={UserPerfil} />
          <Route path="/user/mycars" exact component={UserMyCars} />
          <Route path='/user/mycars/edit/:id'  component={UserMyCarsEdit} />
          <Route path="/user/mycars/rent" exact component={UserRent} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
