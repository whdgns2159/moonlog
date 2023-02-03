import Header from "@/components/header/Header";
import styled from "styled-components";
import {media, MIXINS} from "@/styles/theme";

export default function ArticleFrameLayout({children} : { children : React.ReactNode}){

    const LayoutHeader = styled.header`
        @media ${media.pc}{
          height: 100px;
        };
        @media ${media.tablet}{
          height: 80px;
        };
        @media ${media.mobile}{
          height: 80px;
        };
    `
    const LayoutMain = styled.section`
        ${MIXINS.flexBox()}
    `

    const LayoutNav = styled.nav`
        ${MIXINS.flexBox()}
    `
    const LayoutContents = styled.section`
    
    `
    const LayoutFooter = styled.footer`
        ${MIXINS.flexBox()}
    `

    return (
        <>
            <LayoutHeader>
                <Header/>
            </LayoutHeader>
            <LayoutMain>
                <LayoutNav>

                </LayoutNav>
                <LayoutContents>
                    {children}
                </LayoutContents>
            </LayoutMain>
            <LayoutFooter>

            </LayoutFooter>
        </>
    );
}