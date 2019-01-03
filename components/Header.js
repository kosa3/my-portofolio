import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="alt">
                <span className="logo"><img src="/static/images/kosa.png" /></span>
                <h1>kosa3</h1>
                <p>Web engineer <br />
                    The fourth year web engineer <Link href="https://github.com/kosa3"><a target="_blank">Github</a></Link></p>
            </header>
        )
    }
}

export default Header;