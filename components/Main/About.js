import React from 'react';
import Link from 'next/link';

class Intro extends React.Component {
    render() {
        return (
            <section id="content" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <h2>About</h2>
                        </header>
                        <h2>Technology</h2>
                        <p>PHP / golang / javascript / Vue.js / React.js / Node.js / </p>
                        <p>AWS / GCP / Serverless Framework / firebase / Docker / ElasticSearch ... </p>
                        <h2>Description</h2>
                        <p>都内の某クチコミサイトでWebエンジニアしています。新卒4年目でプログラミング歴4年
                            上記以外にも毎日貪欲に挑戦中！
                        業務では主にPHPをメインに書いてます。phpcon2018のLTにも登壇しました。
                        勉強したらたまにGithubにもあげています。今後はOSSにも積極的に貢献できればと思います。</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro;