import * as React from 'react';
import { Provider } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';

import { configureStore } from '../shared/store';
import IntlProvider from '../shared/i18n/IntlProvider';
import createHistory from '../shared/store/history';

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
    });
import('react-dom').then(({ hydrate }) => {
    hydrate(
        <Provider store={store}>
            {import('react-router-dom').then(({ Router }) => (
                <Router history={history}>
                    <IntlProvider>
                        <HelmetProvider>
                            {import('../shared/App').then(({ default: App }) => (
                                <App />
                            ))}
                        </HelmetProvider>
                    </IntlProvider>
                </Router>
            ))}
        </Provider>,

        document.getElementById('app')
    );
});

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
