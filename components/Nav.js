import React from 'react';
import Link from 'next/link';

class Nav extends React.Component {
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><Link href="/"><a className={this.props.uri === "/" ? "active" : ""}>Introduction</a></Link></li>
                    <li><Link href="/about"><a className={this.props.uri === "/about" ? "active" : ""}>About</a></Link></li>
                    <li><Link href="/contact"><a className={this.props.uri === "/contact" ? "active" : ""}>Contact</a></Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;