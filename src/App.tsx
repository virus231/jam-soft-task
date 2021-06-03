import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./pages/Home";
import { setLoading } from "./redux/reducers/habbits.reducer";
import {habbitsSelector} from './redux/reducers/habbits.reducer'


export default function App() {
  const dispatch = useDispatch()
  const {habbits} = useSelector(habbitsSelector)

  React.useEffect(() => {
    dispatch(setLoading(true))
  },[])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}