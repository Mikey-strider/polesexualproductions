import { Redirect, Route, Switch } from "react-router-dom"
import Event from "./Event"

const Router = () => {
  return (
    <Switch>
      <Route path="/about">
        <div>About US</div>
      </Route>
      <Route path="/events/:name">
        <Event />
      </Route>
      <Route path="/events">
        <Redirect to="/" />
      </Route>
      <Route path="/">
        <div>HOME PAGE</div>
      </Route>
    </Switch>
  )
}

export default Router;