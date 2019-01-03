import React from 'react';

import Intro from '../components/Main/Intro';
import About from '../components/Main/About';
import Contact from '../containers/Main/Contact';

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                {(() => {
                    if (this.props.uri === '/') {
                        return <Intro />
                    } else if (this.props.uri === '/about') {
                        return <About />
                    } else {
                        return <Contact />
                    }
                })()}
            </div>
        );
    }
}

export default Main;