import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

class Contact extends React.Component {
    render() {
        return (
            <section id="cta" className="main">
                <header className="major">
                    <h2>Contact</h2>
                    <p>お問い合わせはこちらまで</p>
                </header>
                <p>メールアドレス</p>
                <p><input onChange={this._onChangeMail} type="text" name="mail" /></p>
                <p>問い合わせ内容</p>
                <p><textarea onChange={this._onChangeContact} name="contact" rows="10" cols="30" /></p>
                {this.props.loadingFlag ? <Spinner /> :
                    <footer className="major">
                        <ul className="actions special">
                            <li><Link href="javascript:void(0)"><a onClick={this._handleClick} className="button primary">Send</a></Link></li>
                        </ul>
                    </footer>
                }
            </section>
        )
    }

    _onChangeMail = (e) => {
        this.setState({mail: e.target.value ? e.target.value : ''});
    }

    _onChangeContact = (e) => {
        this.setState({contact: e.target.value ? e.target.value : ''});
    }

    _handleClick = (e) => {
        e.preventDefault();
        Contact.propTypes = {
            email: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            loadingFlag: PropTypes.bool.isRequired
        }
        this.setState({loadingFlag: true});
        this.props.sendContactForm(this.state);
    }
}

export default Contact;