'use client'
import styled, {ThemeProvider} from 'styled-components';
import {media, MIXINS, theme} from "@/styles/theme";
import RootStyleRegistry from "@/lib/RootStyleRegistry";
import React, {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";

interface IProps {
    children : ReactNode;
    session: any;
}

/**
 * 어플리케이션 전체를 감싸는 Layout component
 * */
function AppLayout({children, session} : IProps) {

    const LayoutFrameCentering = styled.div`
        ${MIXINS.flexBox('column')}
    `
    // ${MIXINS.flexBox('column', '', 'stretch')}
    const LayoutFrame = styled.article`
        display: flex;
        flex-flow: column wrap;
        width: 1200px;
        ${media.pc} {
        }
        ${media.tablet}{
            width: 100%
        }
        ${media.mobile}
    `;

    return (
        <html>
            <head/>
            <body>
            <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                <RootStyleRegistry>
                    <LayoutFrameCentering>
                        <LayoutFrame>
                            {children}
                        </LayoutFrame>
                    </LayoutFrameCentering>
                </RootStyleRegistry>
            </ThemeProvider>
            </SessionProvider>
            </body>
        </html>
    );
};


export default AppLayout;
/**
 * use clinet 텍스트는 Client side render 방식으로 그려지는 styled-components 와 같은 라이브러리를 사용할때
 * 이 컴포넌트는 client가 사용한다고 next render에게 알려주는 지시자이다.
 */