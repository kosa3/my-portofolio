import React, { Component } from 'react';
import App from '../containers/App';
import {Provider} from 'react-redux';
import store from '../store/store';
import { withRouter } from 'next/router';

class AboutPage extends Component {
    constructor(props) {
        super(props);

        const {router} = this.props;
        store.dispatch({type: router.pathname});
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default withRouter(AboutPage);