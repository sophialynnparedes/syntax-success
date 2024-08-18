import {Route, Switch, Router} from "wouter";
import Home from "../pages/Home";

export default function PageRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}