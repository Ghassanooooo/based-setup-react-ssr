// import React, { Suspense } from 'react';
import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

// Does not yet work with server side rendering:
// const Home = React.lazy(() => import('./pages/Home'));
// const Page1 = React.lazy(() => import('./pages/Page-1'));
// const Page2 = React.lazy(() => import('./pages/Page-2'));

const App: React.FC<any> = () => {
    return (
        // <Suspense fallback={<div>Loading</div>}>
        <div>
            <Switch>
                <Route render={() => '404!'} />
            </Switch>
        </div>
        // </Suspense>
    );
};

export default App;
