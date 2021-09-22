import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
