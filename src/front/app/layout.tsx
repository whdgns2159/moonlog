import styled, {ServerStyleSheet, ThemeProvider} from 'styled-components';
import {media, MIXINS, theme} from "@/styles/theme";
import Document, {DocumentContext} from "next/document";

/**
 * 어플리케이션 전체를 감싸는 Layout component
 * */

function AppLayout({children} : { children : React.ReactNode}) {

    const LayoutFrame = styled.article`
      ${MIXINS.flexBox('column')}
      @media ${media.pc}{
        width: 1200px;
      };
      @media ${media.tablet}
      @media ${media.mobile}
    `;



    return (
        <html>
            <head/>
            <body>
                <ThemeProvider theme={theme}>
                    <LayoutFrame>
                        {children}
                    </LayoutFrame>
                </ThemeProvider>
            </body>
        </html>
    );
};


AppLayout.getInitialProps = async (ctx: DocumentContext) => {
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
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        }
    } finally {
        sheet.seal()
    }
}

export default AppLayout;