import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <section>
                    <dl className="alt">
                        <dt>Email</dt>
                        <dd><Link href="mailto:suga.tech3@gmail.com" ><a>suga.tech3@gmail.com</a></Link></dd>
                    </dl>
                    <ul className="icons">
                        <li><Link href="https://twitter.com/kosachan3" ><a target="_blank" className="icon fa-twitter alt"><span className="label">Twitter</span></a></Link></li>
                        <li><Link href="https://github.com/kosa3" ><a target="_blank" className="icon fa-github alt"><span className="label">GitHub</span></a></Link></li>
                    </ul>
                </section>
            </footer>
        )
    }
}

export default Footer;