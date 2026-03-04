import { Route, Switch } from "wouter"
import LinksPage from "../features/links/pages/LinksPage"
import UnderConstructionPage from "../features/under-construction/pages/UnderConstruction"

export function Routes() {
  return (
    <Switch>
        <Route path={"/links"} component={LinksPage} />
        <Route path={"*"} component={UnderConstructionPage} />
    </Switch>
  )
}