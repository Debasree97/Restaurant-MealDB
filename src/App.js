import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MealDetails from "./Components/MealDetails/MealDetails";
import NotFound from "./Components/NotFound/NotFound";
import Restaurant from "./Components/Restaurant/Restaurant";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/restaurants">
            <Restaurant></Restaurant>
          </Route>
          <Route exact path="/restaurant/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      {/* <Header></Header>
      <hr />
    <Meals></Meals> */}
    </div>
  );
}

export default App;
