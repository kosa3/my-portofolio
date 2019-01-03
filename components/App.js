import React from 'react';
import Meta from "../components/Meta";
import Header from "./Header";
import Nav from "../containers/Nav";
import Main from "../containers/Main";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <>
                <Meta/>
                <div id="wrapper">
                    {(() => {
                        if (this.props.uri === '/') {
                            return <Header />
                        } else {
                            return <header id="header" />
                        }
                    })()}
                    <Nav />
                    <Main />
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;