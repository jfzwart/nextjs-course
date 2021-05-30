import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// switch makes sure only one route is rendered
// route listenes to the URL and renders the given component
// do not forget to wrap the APP in the index.js file
