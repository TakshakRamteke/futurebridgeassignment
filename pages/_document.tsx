import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <title>FutureBridge Assignment site</title>
                <meta
                    name='description'
                    content='This is a site that uses headless wordpress to serve posts and is made as a part of the futurebridge assignment'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
