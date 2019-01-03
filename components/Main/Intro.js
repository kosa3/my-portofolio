import React from 'react';
import Link from 'next/link';

class Intro extends React.Component {
    render() {
        return (
            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <h2>Introduction</h2>
                        </header>
                        <p>都内でwebエンジニアしています。</p>
                        <p>新卒4年目でサーバーサイドをメインにフロントエンド、インフラ周り勉強中です。</p>
                        <p>技術面やPRは以下の詳細ページへ...</p>
                        <ul className="actions">
                            <li><Link href="/about"><a className="button">Read More</a></Link></li>
                        </ul>
                    </div>
                    <span className="image"><img src="/static/images/main.jpg" alt=""/></span>
                </div>
            </section>
        )
    }
}

export default Intro;