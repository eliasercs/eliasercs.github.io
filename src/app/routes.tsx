import { Router, Route, Switch } from "wouter"
import { useHashLocation } from "wouter/use-hash-location"
import LinksPage from "../features/links/pages/LinksPage"
import UnderConstructionPage from "../features/under-construction/pages/UnderConstruction"

export function Routes() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path={"/"} component={UnderConstructionPage} />
        <Route path={"/links"} component={LinksPage} />
        <Route path={"*"} component={UnderConstructionPage} />
      </Switch>
    </Router>
  )
}