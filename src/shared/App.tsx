// import React, { Suspense } from 'react';
import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

const App: React.FC<any> = () => {
    return (
        <Switch>
            <Route render={() => '404!'} />
        </Switch>
    );
};

export default App;
