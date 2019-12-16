import React from "react";
import { Switch, Route } from "react-router-dom";

import Merchant from "../pages/Merchant";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Merchant} />
        </Switch>
    );
}
