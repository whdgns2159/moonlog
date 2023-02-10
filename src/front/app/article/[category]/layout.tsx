'use client'
import styled from "styled-components";
import {MIXINS} from "@/styles/theme";

export default function ArticleFrameLayout({children} : { children : React.ReactNode}){


    return (
        <>
            <LayoutNav>
                <a>nav</a>
            </LayoutNav>
            <LayoutContents>
                {children}
            </LayoutContents>
            <LayoutAside>
                <a>aaa</a>
            </LayoutAside>
        </>
    );
}

const LayoutNav = styled.nav`
    ${MIXINS.flexBox('column')}
`
const LayoutContents = styled.section`
  ${MIXINS.flexBox('row','stretch')}
  heigth: 100%;
`
const LayoutAside = styled.aside`
    ${MIXINS.flexBox('column')}
`