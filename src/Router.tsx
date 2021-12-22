import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./routes/Main";

function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter >
    );
}
export default Router;