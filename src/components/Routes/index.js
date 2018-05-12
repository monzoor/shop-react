import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Home from '../Pages/Home';

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Home} />
    </Switch>
);
