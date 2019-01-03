import React from 'react';
import Head from "next/head";

class Meta extends React.Component {
    render() {
        return (
            <Head>
                <title>kosa3 | my-portfolio</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
                <link rel="stylesheet" href="/static/css/main.css"/>
                <noscript>
                    <link rel="stylesheet" href="/static/css/noscript.css"/>
                </noscript>
            </Head>
        )
    }
}

export default Meta;