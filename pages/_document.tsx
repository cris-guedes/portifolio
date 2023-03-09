import * as React from 'react';
import Document,{ DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html >
                <Head>      
                  <link
                    rel="shortcut icon"
                    href="/img/computer.png"
                  />
                   <link rel="icon" href="/img/computer.png" />
                  <link
                    rel="apple-touch-icon"
                    href="/img/computer.png"
                  />
                 
                  <meta
                    name="description"
                    content="Olá seja bem vindo a minha pagina pessoal"
                  />
                    
                </Head>
                <body>
                <script>0</script>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}