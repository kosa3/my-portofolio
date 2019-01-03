import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <section>
                    <dl className="alt">
                        <dt>Email</dt>
                        <dd><Link href="#" ><a href="#">suga.tech3@gmail.com</a></Link></dd>
                    </dl>
                    <ul className="icons">
                        <li><Link href="#" ><a className="icon fa-twitter alt"><span className="label">Twitter</span></a></Link></li>
                        <li><Link href="#" ><a className="icon fa-facebook alt"><span className="label">Facebook</span></a></Link></li>
                        <li><Link href="#" ><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></Link></li>
                    </ul>
                </section>
            </footer>
        )
    }
}

export default Footer;